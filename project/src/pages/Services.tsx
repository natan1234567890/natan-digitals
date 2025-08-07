import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, ShoppingCart, FileText, Palette, Search, ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'One Page Website',
      description: 'Perfect for personal brands, portfolios, or simple business presentations. Clean, modern design with all essential information on a single page.',
      price: '2,000–5,000 ETB',
      features: ['Responsive Design', 'Contact Form', 'Social Media Integration', 'Basic SEO'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Portfolio Website',
      description: 'Showcase your work professionally with galleries, case studies, and client testimonials. Perfect for freelancers, artists, and creative professionals.',
      price: '3,000–6,500 ETB',
      features: ['Image Galleries', 'Project Showcases', 'Client Testimonials', 'Contact Integration'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Business Website',
      description: 'Complete multi-page corporate website with all the features your business needs to establish a strong online presence.',
      price: '5,000–10,000 ETB',
      features: ['Multiple Pages', 'Service Pages', 'About & Team', 'Blog Integration', 'Advanced SEO'],
      gradient: 'from-green-500 to-blue-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Online Menu / Catalog',
      description: 'Digital menu for restaurants or product catalog for shops. Easy to update, mobile-friendly, and designed for customer engagement.',
      price: '3,000–6,000 ETB',
      features: ['Digital Menu/Catalog', 'Easy Updates', 'Mobile Optimized', 'QR Code Integration'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Website',
      description: 'Full-featured online store with payment integration, inventory management, and customer accounts. Start selling online today.',
      price: '8,000–25,000 ETB',
      features: ['Product Management', 'Payment Integration', 'Order Management', 'Customer Accounts', 'Analytics'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App',
      description: 'Native iOS and Android applications tailored to your business needs. From simple apps to complex business solutions.',
      price: 'from 12,000 ETB',
      features: ['iOS & Android', 'Custom Features', 'API Integration'],
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website + App Combo',
      description: 'Complete digital solution combining a professional website with a mobile app. Perfect for businesses wanting full digital presence.',
      price: 'from 18,000 ETB',
      features: ['Website + Mobile App', 'Shared Backend', 'Consistent Branding', 'Cross-platform sync'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Add-Ons',
      description: 'Enhance your project with additional services like SEO optimization, branding packages, maintenance, and digital marketing.',
      price: 'varies',
      features: ['SEO Optimization', 'Brand Design', 'Maintenance Plans', 'Digital Marketing'],
      gradient: 'from-pink-500 to-orange-500',
    },
    {
  icon: <Search className="w-8 h-8" />,
  title: 'Custom Package',
  description: 'Build exactly what you need — tell us your idea, and we’ll create a tailored solution just for you. Perfect for unique requests, special features, or out-of-the-box website needs.',
  price: 'varies',
  features: ['Personalized Features', 'Unique Designs', 'Custom Integrations', 'Flexible Pricing'],
  gradient: 'from-yellow-400 to-red-400',
},

  ];

  const additionalServices = [
    { icon: <Search className="w-6 h-6" />, title: 'SEO Optimization', description: 'Improve your search engine rankings' },
    { icon: <Palette className="w-6 h-6" />, title: 'Brand Design', description: 'Logo and brand identity design' },
    { icon: <Globe className="w-6 h-6" />, title: 'Domain & Hosting', description: 'Complete web hosting solutions' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Maintenance', description: 'Ongoing support and updates' },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional digital solutions tailored for Ethiopian businesses. From simple websites to complex mobile apps, 
            we have the expertise to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                    {service.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to="/order"
                  className={`group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your project with our professional add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, transparent, and efficient. From idea to launch in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs and goals' },
              { step: '02', title: 'Design', description: 'Create mockups and get your approval' },
              { step: '03', title: 'Development', description: 'Build your project with precision' },
              { step: '04', title: 'Launch', description: 'Go live and provide ongoing support' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;