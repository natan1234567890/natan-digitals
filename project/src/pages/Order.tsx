import React from 'react';
import { Phone, Send, MessageSquare } from 'lucide-react';

const Order: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Reach out to us directly.
          </p>
        </div>

        {/* Call Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Safaricom Call */}
          <a
            href="tel:+251704650805"
            className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Call (Safaricom)</h3>
                <p className="text-green-400 font-medium">+251 704 650 805</p>
                <p className="text-gray-300 text-sm">Speak directly with us</p>
              </div>
            </div>
          </a>

          {/* Ethio Telecom Call */}
          <a
            href="tel:+251933925967"
            className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Call (Ethio Telecom)</h3>
                <p className="text-blue-400 font-medium">+251 933 925 967</p>
                <p className="text-gray-300 text-sm">Call us anytime</p>
              </div>
            </div>
          </a>
        </div>

        {/* SMS Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Safaricom SMS */}
          <a
            href="sms:+251704650805"
            className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Message (Safaricom)</h3>
                <p className="text-yellow-400 font-medium">+251 704 650 805</p>
                <p className="text-gray-300 text-sm">Send us a quick message</p>
              </div>
            </div>
          </a>

          {/* Ethio Telecom SMS */}
          <a
            href="sms:+251933925967"
            className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-yellow-400/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-lg group-hover:shadow-lg group-hover:shadow-yellow-300/25 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Message (Ethio Telecom)</h3>
                <p className="text-yellow-300 font-medium">+251 933 925 967</p>
                <p className="text-gray-300 text-sm">Text us directly</p>
              </div>
            </div>
          </a>
        </div>

        {/* Telegram */}
        <div>
          <a
  href="https://t.me/natandigitals"
  target="_blank"
  rel="noopener noreferrer"
  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:-translate-y-1 transition-all duration-300"
>
  <div className="flex items-center space-x-4"> {/* Changed from items-start to items-center */}
    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
      <Send className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-1">Order via Telegram</h3>
      <p className="text-blue-400 font-medium">@natandigitals</p>
      <p className="text-gray-300 text-sm">Quick and easy messaging</p>
    </div>
  </div>
</a>

        </div>
      </div>
    </div>
  );
};

export default Order;
