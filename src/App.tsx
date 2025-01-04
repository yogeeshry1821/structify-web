import React from 'react';
import { Header } from './components/layout/Header.tsx';
import { Hero } from './components/home/Hero.tsx';
import { Features } from './components/home/Features.tsx';
import { HowItWorks } from './components/home/HowItWorks.tsx';
import { About } from './components/home/About.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
      </main>
    </div>
  );
}

export default App;