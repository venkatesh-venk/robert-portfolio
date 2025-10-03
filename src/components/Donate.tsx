"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, CreditCard } from 'lucide-react';
import { useTranslations } from '@/contexts/LocaleContext';

const Donate = () => {
  const t = useTranslations('Donate');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const donationAmounts = [25, 35, 50, 75, 100, 125];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const amount = selectedAmount || parseFloat(customAmount);
    
    // Simulate donation processing
    setTimeout(() => {
      alert(`${t('thankYou')} $${amount} CAD!`);
      setIsProcessing(false);
      setSelectedAmount(null);
      setCustomAmount('');
    }, 1500);
  };

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const isValidAmount = selectedAmount || (customAmount && parseFloat(customAmount) > 0);

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleDonate}>
              {/* Donation Amount Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  {t('selectAmount')}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAmountClick(amount)}
                      className={`relative py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'bg-primary-600 text-white shadow-lg ring-2 ring-primary-600 ring-offset-2'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedAmount === amount && (
                        <span className="absolute top-2 right-2">
                          <Check className="w-5 h-5" />
                        </span>
                      )}
                      ${amount}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('customAmount')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                      $
                    </span>
                    <input
                      type="number"
                      id="customAmount"
                      min="1"
                      step="0.01"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder={t('enterAmount')}
                      className="w-full pl-8 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                      CAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Message */}
              {isValidAmount && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 text-center">
                    <strong>{t('impact')}</strong> {t('impactMessage')}
                  </p>
                </motion.div>
              )}

              {/* Donate Button */}
              <motion.button
                type="submit"
                disabled={!isValidAmount || isProcessing}
                whileHover={{ scale: isValidAmount ? 1.02 : 1 }}
                whileTap={{ scale: isValidAmount ? 0.98 : 1 }}
                className="w-full bg-primary-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <CreditCard className="w-6 h-6" />
                {isProcessing ? t('processing') : t('donateButton')}
              </motion.button>

              {/* Security Note */}
              <p className="text-center text-sm text-gray-500 mt-4">
                {t('securityNote')}
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">{t('transparent')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">🔒</div>
              <p className="text-gray-600">{t('secure')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">💚</div>
              <p className="text-gray-600">{t('taxDeductible')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;

