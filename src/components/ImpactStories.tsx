import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Target } from 'lucide-react';

const CountUpNumber = ({ end, duration = 2000, suffix = '', prefix = '' }: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-bold text-blue-600">
      {prefix}{Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const ImpactStories = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Educational AI Platform at Scale",
      challenge: "Analyze multilingual student calls across 800+ schools",
      solution: "Built breakthrough AI platform with advanced sound engineering and agentic workflows",
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Monthly calls analyzed", value: 700000, suffix: "", accuracy: "95%" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Coverage improvement", value: 100, suffix: "%", from: "3%" },
        { icon: <DollarSign className="w-5 h-5" />, label: "Annual cost savings", value: 500, suffix: "K+", prefix: "$" },
        { icon: <Target className="w-5 h-5" />, label: "Revenue protected", value: 5.2, suffix: "M+", prefix: "$" }
      ]
    },
    {
      title: "AI-Powered Growth Engine", 
      challenge: "Scale lead generation cost-effectively",
      solution: "Developed AI WhatsApp bot with predictive tools and automated workflows",
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Views generated", value: 8, suffix: "M+", qualified: "275K" },
        { icon: <TrendingDown className="w-5 h-5" />, label: "Cost-per-lead reduction", value: 91.8, suffix: "%" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "YoY growth", value: 450, suffix: "%" },
        { icon: <DollarSign className="w-5 h-5" />, label: "Revenue driven", value: 3.6, suffix: "M+", prefix: "$" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Impact <span className="font-semibold">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real results from AI implementations that drive business value
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenge:</h4>
                      <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Impact:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                          {metric.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          <CountUpNumber 
                            end={metric.value} 
                            prefix={metric.prefix || ''} 
                            suffix={metric.suffix || ''} 
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how AI can drive similar results for your business
            </p>
            <a 
              href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 magnetic-hover"
            >
              Book Free 30-Min Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;