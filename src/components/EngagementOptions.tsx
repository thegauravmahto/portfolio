import React from 'react';
import { Calendar, Search, Rocket, Users } from 'lucide-react';

const EngagementOptions = () => {
  const options = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "AI Strategy Session",
      duration: "30 minutes - FREE",
      description: "Quick assessment and roadmap for AI opportunities",
      cta: "Book Free Strategy Call",
      popular: false,
      color: "green"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI Opportunity Audit", 
      duration: "1 Week",
      description: "Comprehensive analysis with actionable implementation plan",
      cta: "Get Detailed Audit",
      popular: false,
      color: "blue"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "MVP Development Sprint",
      duration: "4-6 Weeks",
      description: "From concept to working prototype with user validation",
      cta: "Launch Your MVP",
      popular: true,
      color: "purple"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fractional AI Product Leadership",
      duration: "Monthly",
      description: "Ongoing strategic leadership and execution support",
      cta: "Partner With Me",
      popular: false,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        icon: 'bg-green-100 text-green-600',
        badge: 'bg-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      blue: {
        icon: 'bg-blue-100 text-blue-600',
        badge: 'bg-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        icon: 'bg-purple-100 text-purple-600',
        badge: 'bg-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        icon: 'bg-orange-100 text-orange-600',
        badge: 'bg-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          animation: 'backgroundMove 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Engagement <span className="font-semibold">Options</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the right level of support for your AI ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => {
            const colors = getColorClasses(option.color);
            
            return (
              <div 
                key={index}
              className={`bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 relative fade-in-up group ${
                  option.popular ? 'ring-2 ring-purple-300' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full animate-pulse shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.icon} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {option.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {option.title}
                </h3>

                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  {option.duration}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <a 
                  href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ${colors.button} transform hover:scale-105 hover:shadow-lg magnetic-hover`}
                >
                  {option.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Not sure which option is right for you?
          </p>
          <a 
            href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 magnetic-hover"
          >
            Book Free 30-Min Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementOptions;