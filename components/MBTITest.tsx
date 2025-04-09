"use client";

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
  positive: 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J';
  negative: 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J';
}

const questions: Question[] = [
  // E vs I (Extraversion vs Introversion)
  { id: 1, text: "I prefer to recharge by spending time alone", dimension: 'EI', positive: 'I', negative: 'E' },
  { id: 2, text: "I feel energized after social interactions", dimension: 'EI', positive: 'E', negative: 'I' },
  { id: 3, text: "I prefer to work in a team rather than alone", dimension: 'EI', positive: 'E', negative: 'I' },
  { id: 4, text: "I need time to process my thoughts before speaking", dimension: 'EI', positive: 'I', negative: 'E' },
  { id: 5, text: "I enjoy being the center of attention", dimension: 'EI', positive: 'E', negative: 'I' },
  { id: 6, text: "I prefer to have a few close friends rather than many acquaintances", dimension: 'EI', positive: 'I', negative: 'E' },
  { id: 7, text: "I feel comfortable speaking up in group settings", dimension: 'EI', positive: 'E', negative: 'I' },
  { id: 8, text: "I prefer to observe rather than participate in social situations", dimension: 'EI', positive: 'I', negative: 'E' },

  // S vs N (Sensing vs Intuition)
  { id: 9, text: "I focus more on concrete facts than abstract theories", dimension: 'SN', positive: 'S', negative: 'N' },
  { id: 10, text: "I enjoy exploring new possibilities and ideas", dimension: 'SN', positive: 'N', negative: 'S' },
  { id: 11, text: "I prefer to follow established procedures", dimension: 'SN', positive: 'S', negative: 'N' },
  { id: 12, text: "I notice patterns and connections between different concepts", dimension: 'SN', positive: 'N', negative: 'S' },
  { id: 13, text: "I trust my five senses more than my intuition", dimension: 'SN', positive: 'S', negative: 'N' },
  { id: 14, text: "I enjoy thinking about theoretical concepts", dimension: 'SN', positive: 'N', negative: 'S' },
  { id: 15, text: "I prefer to focus on the present rather than future possibilities", dimension: 'SN', positive: 'S', negative: 'N' },
  { id: 16, text: "I often see hidden meanings in things", dimension: 'SN', positive: 'N', negative: 'S' },

  // T vs F (Thinking vs Feeling)
  { id: 17, text: "I make decisions based on logic rather than feelings", dimension: 'TF', positive: 'T', negative: 'F' },
  { id: 18, text: "I consider how others will feel when making decisions", dimension: 'TF', positive: 'F', negative: 'T' },
  { id: 19, text: "I prefer to be direct and honest even if it might hurt someone", dimension: 'TF', positive: 'T', negative: 'F' },
  { id: 20, text: "I value harmony in relationships over being right", dimension: 'TF', positive: 'F', negative: 'T' },
  { id: 21, text: "I enjoy analyzing problems objectively", dimension: 'TF', positive: 'T', negative: 'F' },
  { id: 22, text: "I find it easy to empathize with others", dimension: 'TF', positive: 'F', negative: 'T' },
  { id: 23, text: "I prefer to focus on facts rather than emotions", dimension: 'TF', positive: 'T', negative: 'F' },
  { id: 24, text: "I consider the impact on people when solving problems", dimension: 'TF', positive: 'F', negative: 'T' },

  // J vs P (Judging vs Perceiving)
  { id: 25, text: "I prefer to have a detailed plan before starting a project", dimension: 'JP', positive: 'J', negative: 'P' },
  { id: 26, text: "I enjoy keeping my options open", dimension: 'JP', positive: 'P', negative: 'J' },
  { id: 27, text: "I like to have a clear schedule and stick to it", dimension: 'JP', positive: 'J', negative: 'P' },
  { id: 28, text: "I prefer to be spontaneous rather than planned", dimension: 'JP', positive: 'P', negative: 'J' },
  { id: 29, text: "I enjoy organizing and categorizing things", dimension: 'JP', positive: 'J', negative: 'P' },
  { id: 30, text: "I find it easy to adapt to changing circumstances", dimension: 'JP', positive: 'P', negative: 'J' },
  { id: 31, text: "I prefer to finish tasks before starting new ones", dimension: 'JP', positive: 'J', negative: 'P' },
  { id: 32, text: "I enjoy exploring multiple possibilities before deciding", dimension: 'JP', positive: 'P', negative: 'J' }
];

const ConfidenceBar = ({ score, max }: { score: number; max: number }) => {
  const percentage = Math.abs(score) / max * 100;
  const color = score > 0 ? 'bg-blue-500' : 'bg-red-500';
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

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
    // Adjust the score based on whether the question is positively or negatively keyed
    const adjustedValue = question.positive === question.dimension[0] ? value : -value;
    
    setAnswers(prev => ({
      ...prev,
      [question.dimension]: (prev[question.dimension] || 0) + adjustedValue
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateMBTI();
    }
  };

  const calculateMBTI = () => {
    let type = '';
    // Calculate scores for each dimension
    const scores = {
      EI: answers['EI'] || 0,
      SN: answers['SN'] || 0,
      TF: answers['TF'] || 0,
      JP: answers['JP'] || 0
    };

    // Determine type based on the scores
    // For EI: Positive means I, negative means E
    type += scores.EI < 0 ? 'E' : 'I';
    // For SN: Positive means N, negative means S
    type += scores.SN > 0 ? 'N' : 'S';
    // For TF: Positive means T, negative means F
    type += scores.TF > 0 ? 'T' : 'F';
    // For JP: Positive means J, negative means P
    type += scores.JP > 0 ? 'J' : 'P';

    setMbtiType(type);
    setStep('result'); // Show results first
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
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          mbtiType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save results');
      }

      alert(data.message || 'Results saved successfully! Please check your email to verify your account.');
    } catch (error) {
      console.error('Error saving results:', error);
      alert(error instanceof Error ? error.message : 'Failed to save results. Please try again.');
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
              <Button variant="outline" onClick={() => handleAnswer(-2)}>Strongly Disagree</Button>
              <Button variant="outline" onClick={() => handleAnswer(-1)}>Disagree</Button>
              <Button variant="outline" onClick={() => handleAnswer(0)}>Neutral</Button>
              <Button variant="outline" onClick={() => handleAnswer(1)}>Agree</Button>
              <Button variant="outline" onClick={() => handleAnswer(2)}>Strongly Agree</Button>
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                placeholder="Enter your email address"
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for saving your results and finding matches
              </p>
            </div>
          </div>
          <Button type="submit" disabled={isSaving} className="w-full">
            {isSaving ? 'Saving...' : 'Save Results'}
          </Button>
        </form>
      )}

      {step === 'result' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Your MBTI Type: {mbtiType}</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-1">Extraversion (E) vs Introversion (I)</p>
              <ConfidenceBar score={answers['EI'] || 0} max={16} />
              <p className="text-xs text-gray-500 mt-1">
                {Math.abs(answers['EI'] || 0) > 4 
                  ? `Strong preference for ${answers['EI'] > 0 ? 'Extraversion' : 'Introversion'}`
                  : `Slight preference for ${answers['EI'] > 0 ? 'Extraversion' : 'Introversion'}`}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Sensing (S) vs Intuition (N)</p>
              <ConfidenceBar score={answers['SN'] || 0} max={16} />
              <p className="text-xs text-gray-500 mt-1">
                {Math.abs(answers['SN'] || 0) > 4
                  ? `Strong preference for ${answers['SN'] > 0 ? 'Sensing' : 'Intuition'}`
                  : `Slight preference for ${answers['SN'] > 0 ? 'Sensing' : 'Intuition'}`}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Thinking (T) vs Feeling (F)</p>
              <ConfidenceBar score={answers['TF'] || 0} max={16} />
              <p className="text-xs text-gray-500 mt-1">
                {Math.abs(answers['TF'] || 0) > 4
                  ? `Strong preference for ${answers['TF'] > 0 ? 'Thinking' : 'Feeling'}`
                  : `Slight preference for ${answers['TF'] > 0 ? 'Thinking' : 'Feeling'}`}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Judging (J) vs Perceiving (P)</p>
              <ConfidenceBar score={answers['JP'] || 0} max={16} />
              <p className="text-xs text-gray-500 mt-1">
                {Math.abs(answers['JP'] || 0) > 4
                  ? `Strong preference for ${answers['JP'] > 0 ? 'Judging' : 'Perceiving'}`
                  : `Slight preference for ${answers['JP'] > 0 ? 'Judging' : 'Perceiving'}`}
              </p>
            </div>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-4">
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                placeholder="Enter your email address"
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for saving your results and finding matches
              </p>
            </div>
            <Button type="submit" disabled={isSaving} className="w-full">
              {isSaving ? 'Saving...' : 'Save Results'}
            </Button>
          </form>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline" 
            className="w-full"
          >
            Take Test Again
          </Button>
        </div>
      )}
    </Card>
  );
} 