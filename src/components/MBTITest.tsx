import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  positive: 'E' | 'N' | 'T' | 'P';
  negative: 'I' | 'S' | 'F' | 'J';
}

const questions: Question[] = [
  {
    id: 1,
    text: "I prefer to spend time with a large group of people rather than alone.",
    dimension: "EI",
    positive: "E",
    negative: "I"
  },
  {
    id: 2,
    text: "I focus more on concrete facts and details rather than abstract theories.",
    dimension: "SN",
    positive: "N",
    negative: "S"
  },
  {
    id: 3,
    text: "I make decisions based on logic and analysis rather than personal values.",
    dimension: "TF",
    positive: "T",
    negative: "F"
  },
  {
    id: 4,
    text: "I prefer to keep my options open rather than make firm plans.",
    dimension: "JP",
    positive: "P",
    negative: "J"
  },
  // Add more questions here...
];

export function MBTITest() {
  const [step, setStep] = useState<'welcome' | 'test' | 'form' | 'result'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [mbtiType, setMbtiType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleStart = () => {
    setStep('test');
  };

  const handleAnswer = (value: number) => {
    const question = questions[currentQuestion];
    setAnswers(prev => ({
      ...prev,
      [question.dimension]: (prev[question.dimension] || 0) + value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMBTI();
    }
  };

  const calculateMBTI = () => {
    let type = '';
    type += answers['EI'] > 0 ? 'E' : 'I';
    type += answers['SN'] > 0 ? 'N' : 'S';
    type += answers['TF'] > 0 ? 'T' : 'F';
    type += answers['JP'] > 0 ? 'P' : 'J';
    setMbtiType(type);
    setStep('form');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch('/api/mbti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          mbtiType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save results');
      }

      setStep('result');
    } catch (error) {
      console.error('Error saving results:', error);
      alert('Failed to save results. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      {step === 'welcome' && (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Welcome to the MBTI Matchmaking Test</h1>
          <p className="text-gray-600">
            This scientific personality assessment will help us find your most compatible matches
            based on the Myers-Briggs Type Indicator (MBTI) framework.
          </p>
          <Button onClick={handleStart}>Start Test</Button>
        </div>
      )}

      {step === 'test' && (
        <div className="space-y-6">
          <Progress value={progress} className="w-full" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
            <p className="text-lg mb-6">{questions[currentQuestion].text}</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => handleAnswer(-1)}>Disagree</Button>
              <Button variant="outline" onClick={() => handleAnswer(1)}>Agree</Button>
            </div>
          </div>
        </div>
      )}

      {step === 'form' && (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold text-center mb-6">Your MBTI Type: {mbtiType}</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Results'}
          </Button>
        </form>
      )}

      {step === 'result' && (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Your MBTI Type: {mbtiType}</h2>
          <p className="text-gray-600">
            Based on your responses, you are an {mbtiType} personality type.
            This information will help us find your most compatible matches.
          </p>
          <Button onClick={() => {
            setStep('welcome');
            setCurrentQuestion(0);
            setAnswers({});
            setMbtiType('');
            setFormData({ name: '', email: '' });
          }}>
            Take Test Again
          </Button>
        </div>
      )}
    </Card>
  );
} 