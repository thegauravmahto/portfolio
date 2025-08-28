import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Approach from './components/Approach';
import Prototypes from './components/Prototypes';
import ImpactStories from './components/ImpactStories';
import Services from './components/Services';
import WhyFractional from './components/WhyFractional';
import EngagementOptions from './components/EngagementOptions';
import FinalCTA from './components/FinalCTA';
import ScrollProgress from './components/ScrollProgress';
import './styles/animations.css';

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      <DarkModeToggle isDark={isDark} toggle={toggle} />
      <ScrollProgress />
      <Hero />
      <Problem />
      <Approach />
      <Prototypes />
      <ImpactStories />
      <Services />
      <WhyFractional />
      <EngagementOptions />
      <FinalCTA />
    </div>
  );
}

export default App;