import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Smartphone, Palette, Star } from 'lucide-react';
import { motion } from 'framer-motion';


const Home: React.FC = () => {
  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Delivery', description: 'Quick turnaround times without compromising quality' },
    { icon: <Globe className="w-6 h-6" />, title: 'Modern Websites', description: 'Responsive, fast, and SEO-optimized websites' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Apps', description: 'Native iOS and Android app development' },
    { icon: <Palette className="w-6 h-6" />, title: 'Custom Design', description: 'Unique branding and design tailored to your business' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '14 Days', label: 'Average Delivery' },
  ];

  return (
    <div className="bg-gray-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-600/30 shadow-cyan-500/10 shadow-xl">
       
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 opacity-50 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 animate-pulse">
              <Star className="w-4 h-4 mr-2" />
              Ethiopia's Premier Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              <span className="text-white">Build Your</span><br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Digital Future
              </span><br />
              <span className="text-white">with Natan Digitals</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Web & App Development for Entrepreneurs & Businesses in Ethiopia. 
              Transform your ideas into powerful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="https://t.me/NatanDigitals"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Order via Telegram
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black bg-opacity-95 border-b border-cyan-600/20">
  <motion.div 
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              Why Choose Natan Digitals?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine creativity, technical expertise, and local understanding to deliver exceptional digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 border-b border-cyan-600/20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
