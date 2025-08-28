import React from 'react';
import { Clock, DollarSign, TrendingUp, Network, Shield } from 'lucide-react';

const WhyFractional = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Immediate Impact",
      description: "Senior expertise from day one, no learning curve"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Fraction of full-time executive cost"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Flexible Engagement",
      description: "Scale up/down based on needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Framework",
      description: "Battle-tested processes and methodologies"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Access",
      description: "Connections to AI talent, tools, and resources"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-200 dark:bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Why Choose <span className="font-semibold text-blue-600 dark:text-blue-400">Fractional?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get senior AI product leadership without the full-time commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <div className="text-blue-600 dark:text-blue-400">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center fade-in-up hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Ready to Transform Your AI Vision Into Reality?
          </h3>
          <p className="text-lg opacity-90 mb-6 text-white">
            Join companies already seeing 20-40% efficiency improvements
          </p>
          <a 
            href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 magnetic-hover"
          >
            Book Free 30-Min Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyFractional;