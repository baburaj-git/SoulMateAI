'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const router = useRouter();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setResetSent(false);
  };

  const handleResetPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address to reset your password');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        console.error('Password reset error:', error);
        setError(error.message);
      } else {
        setResetSent(true);
        setError(null);
      }
    } catch (err) {
      console.error('Password reset error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setResetSent(false);

    // Validate inputs
    if (!email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    if (!password) {
      setError('Password is required');
      setLoading(false);
      return;
    }

    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setError('Login is taking longer than expected. Please try again.');
      }
    }, 10000); // 10 seconds timeout

    try {
      console.log('Attempting to sign in...');
      
      // Sign in with Supabase directly
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        
        // Provide more specific error messages
        if (error.message.includes('Invalid login credentials')) {
          setError('Invalid email or password. Please check your credentials and try again.');
        } else {
          setError(error.message);
        }
        
        setLoading(false);
        return;
      }

      if (data?.user) {
        console.log('Sign in successful, redirecting...');
        // Redirect to landing page
        router.push('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate inputs
    if (!name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    if (!password) {
      setError('Password is required');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      console.log('Attempting to register...');
      
      // First check if user already exists in auth
      const { data: { users }, error: authCheckError } = await supabase.auth.admin.listUsers();
      
      if (authCheckError) {
        console.error('Error checking auth users:', authCheckError);
        // Continue with registration even if we can't check
      } else {
        const existingAuthUser = users?.find(user => user.email === email.trim().toLowerCase());
        if (existingAuthUser) {
          setError('An account with this email already exists. Please try logging in or reset your password.');
          setLoading(false);
          return;
        }
      }
      
      // Check if user exists in the database
      const { data: existingUsers, error: checkError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email.trim().toLowerCase())
        .limit(1);
        
      if (checkError) {
        console.error('Error checking for existing user:', checkError);
        setError('An error occurred while checking for existing users. Please try again.');
        setLoading(false);
        return;
      }
      
      if (existingUsers && existingUsers.length > 0) {
        setError('An account with this email already exists. Please try logging in or reset your password.');
        setLoading(false);
        return;
      }
      
      // Register the user with Supabase
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            name: name.trim(),
          },
        },
      });

      if (error) {
        console.error('Registration error:', error);
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data?.user) {
        console.log('User registered successfully:', data.user);
        
        // Create a user record in the users table
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: email.trim().toLowerCase(),
            name: name.trim(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });

        if (insertError) {
          console.error('Error creating user record:', insertError);
          // Don't show an error to the user, just log it
          console.log('User created in auth but profile creation failed.');
        } else {
          console.log('Profile created successfully');
        }

        // Wait a moment to ensure the user is fully created
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Automatically sign in the user
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });

        if (signInError) {
          console.error('Auto sign-in error:', signInError);
          setError('Registration successful! Please try logging in manually.');
          // Switch to login mode
          setIsLogin(true);
        } else {
          // Redirect to landing page
          router.push('/');
        }
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? (
              <>
                Or{' '}
                <button
                  onClick={toggleMode}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  create a new account
                </button>
              </>
            ) : (
              <>
                Or{' '}
                <button
                  onClick={toggleMode}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  sign in to your existing account
                </button>
              </>
            )}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={isLogin ? handleLogin : handleRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin ? 'rounded-t-md' : ''
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin ? 'rounded-b-md' : ''
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  disabled={loading}
                >
                  Forgot your password?
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
              {error.includes('already exists') && (
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go to login
                  </button>
                  {' or '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(true);
                      setError(null);
                    }}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Reset password
                  </button>
                </div>
              )}
            </div>
          )}

          {resetSent && (
            <div className="text-green-500 text-sm text-center">
              Password reset instructions have been sent to your email.
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (isLogin ? 'Signing in...' : 'Registering...') : (isLogin ? 'Sign in' : 'Register')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 