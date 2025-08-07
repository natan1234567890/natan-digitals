import React from 'react';
import { ExternalLink, Globe, Smartphone, ShoppingCart, Palette, Users, FileText } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Modern Restaurant Website',
      category: 'Business Website',
      type: 'Restaurant',
      icon: <FileText className="w-6 h-6" />,
      description: 'Complete restaurant website with online menu, reservation system, and location details.',
      features: ['Online Menu', 'Reservation System', 'Gallery', 'Contact Integration'],
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Ethiopian Fashion Store',
      category: 'E-Commerce',
      type: 'Fashion',
      icon: <ShoppingCart className="w-6 h-6" />,
      description: 'Full-featured online store for traditional and modern Ethiopian fashion with payment integration.',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      tech: ['React', 'Stripe', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Professional Services Portfolio',
      category: 'Portfolio Website',
      type: 'Professional',
      icon: <Users className="w-6 h-6" />,
      description: 'Clean and elegant portfolio website for a consulting firm showcasing services and team.',
      features: ['Service Pages', 'Team Profiles', 'Case Studies', 'Client Testimonials'],
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Local Coffee Shop App',
      category: 'Mobile App',
      type: 'Food & Beverage',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Mobile app for coffee orders, loyalty program, and location finder for Ethiopian coffee chain.',
      features: ['Order System', 'Loyalty Program', 'Store Locator', 'Push Notifications'],
      tech: ['React Native', 'Firebase', 'Stripe'],
      gradient: 'from-green-500 to-blue-500',
      image: 'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Creative Agency Landing',
      category: 'One Page Website',
      type: 'Creative',
      icon: <Palette className="w-6 h-6" />,
      description: 'Stunning single-page website for a creative agency with portfolio showcase and contact form.',
      features: ['Portfolio Gallery', 'Contact Form', 'Team Section', 'Service Overview'],
      tech: ['Vue.js', 'GSAP', 'Netlify'],
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Tech Startup Platform',
      category: 'Business Website',
      type: 'Technology',
      icon: <Globe className="w-6 h-6" />,
      description: 'Multi-page corporate website for Ethiopian tech startup with blog and investor relations.',
      features: ['Company Pages', 'Blog System', 'Investor Portal', 'Career Section'],
      tech: ['React', 'Headless CMS', 'AWS'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Business Website', 'E-Commerce', 'Portfolio Website', 'Mobile App', 'One Page Website'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our collection of successful projects for Ethiopian businesses. From simple websites to complex applications, 
            see how we've helped companies establish their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400 border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gray-900/80 text-gray-300 text-sm rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs rounded border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 border border-blue-500/20 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Real results for real businesses across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '2.5x', label: 'Average Traffic Increase' },
              { number: '48hrs', label: 'Average Response Time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Your project could be the next showcase in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Ideas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;