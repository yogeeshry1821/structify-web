import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header.tsx';
import { Hero } from './components/home/Hero.tsx';
import { Features } from './components/home/Features.tsx';
import { HowItWorks } from './components/home/HowItWorks.tsx';
import { About } from './components/home/About.tsx';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow.tsx'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <About />
          <Routes>
            <Route path="/onboarding" element={<OnboardingFlow />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
