import React from 'react';
import { AlertTriangle, TrendingDown, Clock, Target } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const Problem = () => {
  const backgroundParallax1 = useParallax({ speed: 0.3, direction: 'up' });
  const backgroundParallax2 = useParallax({ speed: 0.4, direction: 'down' });
  const titleParallax = useParallax({ speed: 0.2, direction: 'up' });

  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      text: "Founders spend months building AI features nobody uses"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Technical teams build impressive demos that solve wrong problems"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "AI strategies lack clear ROI and business alignment"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Prototyping takes forever, missing market windows"
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div 
          ref={backgroundParallax1.ref}
          className="absolute top-10 right-10 w-64 h-64 bg-red-50 dark:bg-red-900 rounded-full blur-2xl opacity-50"
          style={{
            transform: backgroundParallax1.transform,
            willChange: 'transform'
          }}
        />
        <div 
          ref={backgroundParallax2.ref}
          className="absolute bottom-20 left-10 w-48 h-48 bg-orange-50 dark:bg-orange-900 rounded-full blur-2xl opacity-40"
          style={{
            transform: backgroundParallax2.transform,
            willChange: 'transform'
          }}
        />
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
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center pulse-glow mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              <span className="font-semibold text-red-600 dark:text-red-400">73%</span> of AI Projects Never Reach Production
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 fade-in-up hover:transform hover:-translate-y-2 hover:shadow-xl group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-red-500 dark:text-red-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 italic font-light">
            The gap between AI capability and user adoption is growing wider.
          </p>
          
          <div className="mt-12 fade-in-up">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Don't Let Your AI Project Become Another Statistic
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get expert guidance to ensure your AI initiative delivers real business value
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
      </div>
    </section>
  );
};

export default Problem;