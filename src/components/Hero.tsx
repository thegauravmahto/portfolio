import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useParallax, useMouseParallax } from '../hooks/useParallax';

const roles = [
  'Fractional AI Product Manager',
  '0→1 GenAI Specialist', 
  'AI Strategy Architect',
  'Rapid Prototyping Expert'
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const titleParallax = useParallax({ speed: 0.3, direction: 'up' });
  const subtitleParallax = useParallax({ speed: 0.5, direction: 'up' });
  const mouseParallax = useMouseParallax(0.02);
  const floatingParallax = useMouseParallax(0.05);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#problem');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 dark:bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: mouseParallax.transform
            }}
          />
        ))}
        
        {/* Gradient Orbs with Smooth Parallax */}
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"
          style={{
            transform: `${floatingParallax.transform} scale(1.1)`,
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full blur-3xl opacity-20"
          style={{
            transform: `${floatingParallax.transform} scale(0.9)`,
            willChange: 'transform'
          }}
        />
      </div>

      <div className="max-w-4xl text-center space-y-8 fade-in-up">
        <div className="relative" ref={titleParallax.ref} style={{ transform: titleParallax.transform, willChange: 'transform' }}>
          <Sparkles 
            className="absolute -top-8 -right-8 w-8 h-8 text-blue-400 dark:text-blue-300 animate-pulse" 
            style={{
              transform: floatingParallax.transform,
              willChange: 'transform'
            }}
          />
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="font-semibold">Gaurav Mahto</span>
          </h1>
        </div>
        
        <div className="h-20 flex items-center justify-center">
          <div className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 role-carousel">
            {roles[currentRole]}
          </div>
        </div>

        <div ref={subtitleParallax.ref} style={{ transform: subtitleParallax.transform, willChange: 'transform' }}>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Transforming AI concepts into products users actually adopt.<br />
          <span className="text-gray-900 dark:text-white font-medium">From strategy to launch in weeks, not months.</span>
          </p>
        </div>

        <div className="pt-8">
          <a 
            href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl magnetic-hover group"
          >
            <span className="relative z-10">
              Book Free 30-Min Strategy Call
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic pt-4">
          Trusted by startups to enterprises across FinTech, EdTech & SaaS
        </p>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 animate-bounce text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;