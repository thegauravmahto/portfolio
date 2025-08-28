import React, { useState } from 'react';
import { Calendar, Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with your email service
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Ready to Turn AI Hype Into <span className="font-semibold text-blue-400">Business Results?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The companies moving fast with strategic AI implementation will dominate their markets.
          </p>

          <div className="bg-gray-800 rounded-2xl p-8 mb-12 fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-lg text-gray-300 mb-4">
              Early adopters are already seeing <span className="text-blue-400 font-semibold">20-40%</span> improvements 
              in efficiency and customer satisfaction.
            </p>
            <p className="text-gray-400">
              Don't get left behind.
            </p>
          </div>

          <div className="space-y-6 fade-in-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="https://calendly.com/gauravdhirm/30-minutes-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl magnetic-hover group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Calendar className="w-5 h-5 inline mr-3" />
                Book Your Free 30-Min Strategy Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <p className="text-gray-400 text-sm">
              No sales pitch. Just honest advice on your AI opportunities.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-700 fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Gaurav Mahto</h3>
              <p className="text-blue-400 font-medium">Transforming AI Concepts Into Market-Ready Products</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <a href="mailto:gauravdhirm@gmail.com" className="hover:text-blue-400 transition-colors">
                  gauravdhirm@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Linkedin className="w-5 h-5" />
                <a 
                  href="https://www.linkedin.com/in/gauravmahto/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <p className="text-gray-300 mb-4">Get AI insights delivered to your inbox</p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:scale-105"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
                >
                  {submitted ? <CheckCircle className="w-4 h-4" /> : <span>Subscribe</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;