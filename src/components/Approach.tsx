import React from 'react';
import { Search, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { useParallax, useMouseParallax } from '../hooks/useParallax';

const Approach = () => {
  const titleParallax = useParallax({ speed: 0.2, direction: 'up' });

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery",
      description: "Market-first AI strategy (not technology-first)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Prototype", 
      description: "Rapid prototyping in days, not months"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Validate",
      description: "User-centric design with measurable outcomes"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale",
      description: "Business impact from day one"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-50 dark:bg-blue-900 rounded-full blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-50 dark:bg-purple-900 rounded-full blur-xl opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleParallax.ref}
          className="text-center mb-16 fade-in-up"
          style={{
            transform: titleParallax.transform,
            willChange: 'transform'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Building AI Products ≠ <span className="font-semibold text-blue-600 dark:text-blue-400">Building AI Products People Use</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I bridge the gap between cutting-edge AI and real business value. My framework:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div 
                className="flex flex-col items-center text-center w-full md:w-64 fade-in-up group mb-8 md:mb-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg floating-icon">
                  <div className="text-blue-600 dark:text-blue-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 min-h-[2rem]">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed min-h-[3rem] px-2">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-px bg-gray-300 dark:bg-gray-600 self-center animated-line" style={{ marginTop: '-4rem' }}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 text-center fade-in-up hover:bg-blue-100 dark:hover:bg-blue-800 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Discovery → Rapid Prototype → Validate → Scale
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A proven methodology that transforms AI concepts into market-ready products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;