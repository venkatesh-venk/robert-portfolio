"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, Clock, AlertCircle } from 'lucide-react';
import { useTranslations } from '@/contexts/LocaleContext';
import validator from 'validator';

interface Message {
  id: string;
  email: string;
  message: string;
  timestamp: number;
}

const CommunityBoard = () => {
  const t = useTranslations('Community');
  const [messages, setMessages] = useState<Message[]>([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('communityMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('communityMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const validateEmailAddress = (emailValue: string) => {
    if (!emailValue) {
      setEmailError(t('emailRequired'));
      return false;
    }
    if (!validator.isEmail(emailValue)) {
      setEmailError(t('emailInvalid'));
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched) {
      validateEmailAddress(value);
    }
  };

  const handleEmailBlur = () => {
    setTouched(true);
    validateEmailAddress(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched(true);
    
    // Validate email before submission
    if (!validateEmailAddress(email)) {
      return;
    }
    
    if (!message.trim()) return;

    setIsSubmitting(true);

    const newMessage: Message = {
      id: Date.now().toString(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [newMessage, ...prev]);
    setEmail('');
    setMessage('');
    setEmailError('');
    setTouched(false);
    
    setTimeout(() => setIsSubmitting(false), 500);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Post Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary-600" />
                {t('postMessage')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('emailLabel')}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 transition-colors ${
                        emailError 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                      }`}
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  {emailError && (
                    <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>{emailError}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !!emailError || !email || !message}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t('posting') : t('postButton')}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Messages List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('communityMessages')} ({messages.length})
            </h2>
            
            {messages.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  {t('noMessages')}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Message Content - Top */}
                    <p className="text-gray-900 text-lg leading-relaxed whitespace-pre-wrap mb-4">
                      {msg.message}
                    </p>
                    
                    {/* Email and Timestamp - Bottom */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <Mail className="w-4 h-4 text-primary-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">{msg.email}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {formatDate(msg.timestamp)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBoard;

