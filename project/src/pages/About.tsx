import React from 'react';
import { CheckCircle, Rocket, Users, Award, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'We understand the urgency of business needs and deliver projects quickly without compromising on quality.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Business-Focused',
      description: 'Every solution is designed with your business goals in mind, helping you grow and succeed online.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Mobile-Ready',
      description: 'All our websites and apps are fully responsive and optimized for mobile devices.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Custom Design',
      description: 'Unique, professional designs tailored to reflect your brand identity and values.',
    },
  ];

  const achievements = [
    { icon: <Clock className="w-6 h-6" />, text: 'Average 3-day delivery time' },
    { icon: <Shield className="w-6 h-6" />, text: '100% secure and reliable solutions' },
    { icon: <Award className="w-6 h-6" />, text: 'Trusted by 50+ businesses' },
    { icon: <Users className="w-6 h-6" />, text: 'Dedicated customer support' },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Natan Digitals</span>?
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're more than just a digital agency. We're your partners in building a strong online presence 
            that drives real business results for entrepreneurs and companies across Ethiopia.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To empower Ethiopian businesses and entrepreneurs with cutting-edge digital solutions that drive growth, 
                enhance customer engagement, and create lasting success in the digital marketplace. We believe every 
                business deserves a professional online presence that reflects their unique value and reaches their target audience effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values drive everything we do, ensuring exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Businesses Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <div className="text-cyan-400">
                    {achievement.icon}
                  </div>
                  <span className="text-sm md:text-base">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Card Section (Replaces Team) */}
        <div className="mb-20">
          <div className="flex justify-center">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300 max-w-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">NT</div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Natan Tewodros</h3>
                <p className="text-blue-400 font-medium">Founder of Natan Digitals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Focus Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proudly Serving Ethiopia
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              As a local Ethiopian digital agency, we understand the unique challenges and opportunities 
              in our market. We're committed to helping local businesses compete globally while staying 
              true to their Ethiopian roots and values.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-yellow-500 text-white font-semibold rounded-lg">
              🇪🇹 Building Ethiopia's Digital Future
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
