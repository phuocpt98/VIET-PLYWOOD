
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/catalog/Catalog';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Counters from './components/Counters';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

type ViewType = 'home' | 'catalog';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cuộn lên đầu trang khi chuyển view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <Products />
            <Features />
            <Counters />
            <Contact onShowToast={showToast} />
          </>
        ) : (
          <div className="pt-20 bg-[#FDFBF9] min-h-screen">
            <Catalog />
          </div>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
    </div>
  );
};

export default App;
