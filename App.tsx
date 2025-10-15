// FIX: Implemented the main App component to structure the application layout and render all sections.
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  const toggleAiChat = () => {
    setIsAiChatOpen(prev => !prev);
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* WhatsApp Button */}
      <FloatingActionButton /> 
      {/* AI Assistant Button and Widget */}
      <ChatWidget isOpen={isAiChatOpen} toggle={toggleAiChat} />
    </div>
  );
};

export default App;
