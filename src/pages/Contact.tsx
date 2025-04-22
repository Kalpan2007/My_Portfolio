import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import PageTransition from '../components/PageTransition';
import BackToDashboard from '../components/BackToDashboard';

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgrnnoy"); // Replace with your actual Formspree form ID
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-8 bg-[#0f172a]">
        <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8">
          <div className="mb-8">
            <BackToDashboard />
          </div>

          <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Me</h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  👤 Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  📧 Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-400 mb-2">
                  📎 Reason for Contact
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                >
                  <option value="" className="bg-[#1e293b] text-gray-400">Select a reason</option>
                  <option value="collaboration" className="bg-[#1e293b] text-gray-300">🤝 Collaboration</option>
                  <option value="freelance" className="bg-[#1e293b] text-gray-300">💼 Freelance</option>
                  <option value="feedback" className="bg-[#1e293b] text-gray-300">📝 Feedback</option>
                  <option value="hiring" className="bg-[#1e293b] text-gray-300">🚀 Hiring</option>
                  <option value="other" className="bg-[#1e293b] text-gray-300">✨ Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  💬 Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me everything..."
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Contact Back Platform Dropdown */}
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-gray-400 mb-2">
                  📲 Where can I contact you back?
                </label>
                <select
                  id="platform"
                  name="platform"
                  value={selectedPlatform}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlatform(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                >
                  <option value="" className="bg-[#1e293b] text-gray-400">Select a platform (optional)</option>
                  <option value="instagram" className="bg-[#1e293b] text-gray-300">Instagram</option>
                  <option value="whatsapp" className="bg-[#1e293b] text-gray-300">WhatsApp</option>
                  <option value="linkedin" className="bg-[#1e293b] text-gray-300">LinkedIn</option>
                  <option value="telegram" className="bg-[#1e293b] text-gray-300">Telegram</option>
                  <option value="discord" className="bg-[#1e293b] text-gray-300">Discord</option>
                  <option value="other" className="bg-[#1e293b] text-gray-300">Other</option>
                </select>
              </div>

              {/* Conditionally Rendered Input */}
              {selectedPlatform && (
                <div>
                  <label htmlFor="platformDetail" className="block text-sm font-medium text-gray-400 mb-2">
                    {`Your ${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} ID`}
                  </label>
                  <input
                    type={selectedPlatform === 'whatsapp' ? 'number' : 'text'}
                    id="platformDetail"
                    name="platformDetail"
                    placeholder={
                      {
                        instagram: '@username',
                        whatsapp: 'WhatsApp Number',
                        linkedin: 'LinkedIn Profile URL',
                        telegram: '@username',
                        discord: 'User#1234',
                        other: 'Preferred method',
                      }[selectedPlatform]
                    }
                    className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                  />
                </div>
              )}

              {/* How did you find me? */}
              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-gray-400 mb-2">
                  🌐 How did you find me?
                </label>
                <select
                  id="referral"
                  name="referral"
                  className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-gray-300 border border-[#3b82f6] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#273549] transition-all"
                >
                  <option value="" className="bg-[#1e293b] text-gray-400">Select an option (optional)</option>
                  <option value="linkedin" className="bg-[#1e293b] text-gray-300">LinkedIn</option>
                  <option value="portfolio" className="bg-[#1e293b] text-gray-300">This Portfolio</option>
                  <option value="google" className="bg-[#1e293b] text-gray-300">Google</option>
                  <option value="friend" className="bg-[#1e293b] text-gray-300">Friend</option>
                  <option value="other" className="bg-[#1e293b] text-gray-300">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2 hover:scale-102 hover:shadow-[0_0_12px_#3b82f6]"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {state.succeeded && (
                <p className="text-green-500 mt-4 text-center">✨ Thank you! Your message has been sent.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;