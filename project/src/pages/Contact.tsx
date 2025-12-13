import React from 'react';
import {
  Phone,
  Send,
  MapPin,
  Clock,
  MessageCircle,
  MessageSquare,
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Send className="w-6 h-6" />,
      title: 'Telegram',
      value: '@natandigitals',
      description: 'Message us on Telegram for quick responses',
      action: 'https://t.me/natandigitals',
      gradient: 'from-blue-500 to-cyan-500',
    },
    
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Ethiopia',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Business Hours',
      value: '24/7',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Response Time',
      value: 'Usually within 5 hours',
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your digital journey? Contact us today and let's discuss how we can help your
            business grow online. We're here to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Methods */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Methods</h2>

            {/* Split Call Buttons */}
            <div className="flex gap-4 mb-4">
              <a
                href="tel:+251704650805"
                className="flex-1 group block bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-400 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-green-400/25 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Safaricom</h3>
                    <p className="text-blue-400 text-sm">+251 704 650 805</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+251933925967"
                className="flex-1 group block bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-400 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Ethio Telecom</h3>
                    <p className="text-blue-400 text-sm">+251 933 925 967</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Split SMS Buttons */}
            <div className="flex gap-4 mb-6">
              <a
                href="sms:+251704650805"
                className="flex-1 group block bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-400 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Safaricom SMS</h3>
                    <p className="text-blue-400 text-sm">+251 704 650 805</p>
                  </div>
                </div>
              </a>

              <a
                href="sms:+251933925967"
                className="flex-1 group block bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-400 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Ethio Telecom SMS</h3>
                    <p className="text-blue-400 text-sm">+251 933 925 967</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Other Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-1">{method.title}</h3>
                      <p className="text-blue-400 font-medium mb-2">{method.value}</p>
                      <p className="text-gray-300 text-sm">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Info */}
            <div className="mt-8 bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Office Information</h3>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-cyan-400">{info.icon}</div>
                    <div>
                      <span className="text-gray-300 text-sm">{info.title}: </span>
                      <span className="text-white font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How long does it take to build a website?',
                  answer: 'Most projects are completed within 7–20 days, depending on complexity and your requirements.',
                },
                {
                  question: 'Do you provide hosting and domain services?',
                  answer: 'Yes, we can help you with domain registration and hosting setup, or work with your existing providers.',
                },
                {
                  question: 'Can you update my existing website?',
                  answer: 'Absolutely! We can redesign, update, or add new features to your existing website.',
                },
                {
                  question: 'Do you offer payment plans?',
                  answer: 'Yes, we offer flexible payment options. Contact us to discuss what works best for your budget.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
