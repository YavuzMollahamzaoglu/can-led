import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a UI demonstration. In a real app, you would send this data to a server.
        if(name && email && message) {
            setStatus('Mesajınız için teşekkür ederiz! Kısa süre içinde size geri döneceğiz.');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Lütfen tüm alanları doldurun.');
        }
    }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Bize Ulaşın</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Aklınızda bir proje mi var? Hadi konuşalım. Bize telefon, e-posta veya aşağıdaki form aracılığıyla ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-primary text-2xl w-8 text-center"></i>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">Telefon</h3>
                        <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-slate-600 hover:text-primary">{PHONE_NUMBER}</a>
                    </div>
                </div>
                 <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-primary text-2xl w-8 text-center"></i>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">E-posta</h3>
                        <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-600 hover:text-primary">{EMAIL_ADDRESS}</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-primary text-2xl w-8 text-center"></i>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">Adres</h3>
                        <p className="text-slate-600">Lokasyon bilgisi için bize ulaşın.</p>
                    </div>
                </div>
                <div className="flex space-x-6 pt-4">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary text-3xl transition-colors"><i className="fab fa-instagram"></i></a>
                    <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary text-3xl transition-colors"><i className="fab fa-facebook"></i></a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded-lg shadow-md border border-slate-200">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">İsim</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">E-posta</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Mesaj</label>
                    <textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">Mesajı Gönder</button>
                 {status && <p className="mt-4 text-center text-sm text-slate-600">{status}</p>}
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;