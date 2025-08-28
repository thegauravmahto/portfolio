import React, { useState } from 'react';
import { Compass, Zap, Rocket, Users } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "AI Strategy & Roadmapping",
      items: [
        "High-impact use case identification",
        "Technical feasibility assessment", 
        "Competitive analysis and positioning",
        "ROI-focused implementation planning"
      ],
      color: "blue"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid AI Prototyping",
      items: [
        "Functional prototypes in 48-72 hours",
        "User validation and feedback integration",
        "Technical proof-of-concept development",
        "Market-fit assessment"
      ],
      color: "purple"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "0→1 Product Development",
      items: [
        "GenAI product strategy from concept to launch",
        "Cross-functional team leadership",
        "Agile execution and iteration",
        "Go-to-market strategy"
      ],
      color: "green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fractional Leadership",
      items: [
        "Part-time AI Product Manager (10-20 hours/week)",
        "Process optimization, Market Research",
        "Strategic guidance without full-time costs",
        "Scale AI capabilities rapidly"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-50' : 'bg-white',
        border: isActive ? 'border-blue-300' : 'border-gray-200',
        icon: 'bg-blue-100 text-blue-600',
        accent: 'text-blue-600'
      },
      purple: {
        bg: isActive ? 'bg-purple-50' : 'bg-white',
        border: isActive ? 'border-purple-300' : 'border-gray-200',
        icon: 'bg-purple-100 text-purple-600',
        accent: 'text-purple-600'
      },
      green: {
        bg: isActive ? 'bg-green-50' : 'bg-white',
        border: isActive ? 'border-green-300' : 'border-gray-200',
        icon: 'bg-green-100 text-green-600',
        accent: 'text-green-600'
      },
      orange: {
        bg: isActive ? 'bg-orange-50' : 'bg-white',
        border: isActive ? 'border-orange-300' : 'border-gray-200',
        icon: 'bg-orange-100 text-orange-600',
        accent: 'text-orange-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full blur-xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 rounded-full blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Services & <span className="font-semibold">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive AI product development from strategy to scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isActive = activeService === index;
            const colors = getColorClasses(service.color, isActive);
            
            return (
              <div 
                key={index}
                className={`border-2 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 fade-in-up group ${colors.bg} ${colors.border} dark:border-gray-600`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setActiveService(isActive ? null : index)}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.icon} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <div className={`space-y-3 transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${colors.accent.replace('text-', 'bg-')}`}></div>
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>

                {!isActive && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
                    Click to see details
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Which Service Fits Your Needs?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss your specific requirements and find the perfect approach
            </p>
            <a 
              href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 magnetic-hover"
            >
              Book Free 30-Min Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;