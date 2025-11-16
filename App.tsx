
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductRange from './components/ProductRange';
import Solutions from './components/Solutions';
import Support from './components/Support';
import Manufacturing from './components/Manufacturing';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-zess-body">
      <Header />
      <main>
        <Hero />
        <ProductRange />
        <Solutions />
        <Support />
        <Manufacturing />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default App;
