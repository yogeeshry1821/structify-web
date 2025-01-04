import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header.tsx';
import { Hero } from './components/home/Hero.tsx';
import { Features } from './components/home/Features.tsx';
import { HowItWorks } from './components/home/HowItWorks.tsx';
import { About } from './components/home/About.tsx';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow.tsx';
import { Footer } from './components/home/Footer.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white mx-5 ">
        <Header />
        <main>

          <Routes>
            {/* Define routes for each component */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <HowItWorks />
                  <About />
                </>
              }
            />
            <Route path="/onboarding" element={<OnboardingFlow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

