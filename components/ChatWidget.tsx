
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { Message } from '../types';

interface ChatWidgetProps {
  isOpen: boolean;
  toggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, toggle }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      try {
        // Prefer Vite-style env variable, then fall back to process.env mappings from vite.config.ts
        const apiKey = (
          (import.meta as any).env?.VITE_GOOGLE_API_KEY ||
          (process as any)?.env?.API_KEY ||
          (process as any)?.env?.GEMINI_API_KEY
        ) as string | undefined;
        if (!apiKey) throw new Error('API anahtarı bulunamadı. Lütfen .env(.local) dosyanıza VITE_GOOGLE_API_KEY=YOUR_KEY ekleyin.');
        const ai = new GoogleGenAI({ apiKey });
        const chatSession = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: 'You are a friendly and helpful assistant for CAN LED, a company that sells and installs high-quality indoor and outdoor LED screens. Your goal is to answer questions about their products, services, and projects. Be polite and professional. If you don\'t know an answer, say you need to check with the team.',
          },
        });
        chatRef.current = chatSession;
        setMessages([{ role: 'model', text: 'Merhaba! CAN LED ürünleri veya hizmetleri hakkında nasıl yardımcı olabilirim?' }]);
      } catch (e: any) {
        console.error("Failed to initialize chat:", e);
        setError(e?.message || "Sohbet başlatılamadı. Lütfen daha sonra tekrar deneyin.");
      }
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: currentInput });
      
      let modelResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        modelResponse += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = modelResponse;
          return newMessages;
        });
      }
    } catch (e: any) {
      console.error("Error sending message:", e);
      setError("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages[newMessages.length - 1].role === 'model' && newMessages[newMessages.length - 1].text === '') {
           newMessages[newMessages.length - 1].text = 'Üzgünüm, bir sorunla karşılaştım.';
        } else {
           newMessages.push({ role: 'model', text: 'Üzgünüm, bir sorunla karşılaştım.' });
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={toggle}
          className="bg-primary hover:bg-primary-hover text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Sohbeti aç"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-2xl`}></i>
        </button>
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
            <span className="bg-slate-800 text-white text-sm font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Yapay Zeka Asistan
            </span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col transition-all">
          <header className="bg-slate-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">CAN LED Asistan</h3>
            <button onClick={toggle} className="text-slate-300 hover:text-white text-2xl leading-none">&times;</button>
          </header>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-3 py-2 max-w-xs ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-slate-200 text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-slate-200 text-slate-800 rounded-lg px-3 py-2">
                      <span className="animate-pulse">...</span>
                  </div>
              </div>
            )}
             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Bir mesaj yazın..."
                className="flex-1 border border-slate-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
              />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-hover disabled:bg-slate-400" disabled={isLoading}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;