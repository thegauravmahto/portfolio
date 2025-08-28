import React, { useState } from 'react';
import { Play, Video, MessageCircle, UserCheck, FileText } from 'lucide-react';

const Prototypes = () => {
  const [activePrototype, setActivePrototype] = useState<number | null>(null);

  const prototypes = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "VideoTutor AI",
      subtitle: "Text-to-video educational content generation",
      description: "Automated explainer videos from text inputs",
      features: ["Text-to-speech narration", "Dynamic visual generation", "Custom branding", "Export in multiple formats"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Conversational AI Tutor",
      subtitle: "Natural, human-like educational conversations",
      description: "Real-time adaptive learning discussions",
      features: ["Natural language processing", "Adaptive learning paths", "Progress tracking", "Multi-language support"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "AI Hiring Agent",
      subtitle: "Automated first-screening interview calls",
      description: "Human-quality candidate evaluation at scale",
      features: ["Voice interview analysis", "Skill assessment", "Bias-free evaluation", "Detailed scoring reports"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart OCR Engine", 
      subtitle: "Intelligent document processing system",
      description: "Extract structured data from invoices, PDFs, forms",
      features: ["Multi-format support", "Intelligent extraction", "Data validation", "API integration"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 dark:bg-blue-400 rounded-full opacity-20 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            From Concept to Working Prototype in <span className="font-semibold text-blue-600 dark:text-blue-400">72 Hours</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real AI prototypes built for actual business problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {prototypes.map((prototype, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-700 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 fade-in-up group ${
                activePrototype === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : 'shadow-lg'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setActivePrototype(activePrototype === index ? null : index)}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${prototype.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {prototype.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {prototype.title}
              </h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {prototype.subtitle}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                {prototype.description}
              </p>

              {activePrototype === index && (
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-600 prototype-details">
                  <ul className="space-y-2">
                    {prototype.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Discuss This Solution</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to Build Something Similar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how we can create a custom AI solution for your specific business needs
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

export default Prototypes;