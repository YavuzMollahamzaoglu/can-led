
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-light p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 border border-slate-200">
    <i className={`${icon} text-primary text-4xl mb-4`}></i>
    <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Sizin Vizyonunuz, Bizim Uzmanlığımız</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            CAN LED olarak, sarsılmaz destek ve müşteri memnuniyeti taahhüdü ile üst düzey LED çözümleri sunmaya adadık.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="fas fa-drafting-compass" title="Özel Tasarımlar">
            Mekanınıza ve marka kimliğinize özel, benzersiz LED enstalasyonları oluşturmada uzmanız. Hayal gücünüz bizim planımızdır.
          </FeatureCard>
          <FeatureCard icon="fas fa-headset" title="Özel Destek">
            Ekibimiz, ilk konseptten kuruluma ve sonrasına kadar her adımda sizinle birliktedir ve sorunsuz bir deneyim sağlar.
          </FeatureCard>
          <FeatureCard icon="fas fa-star" title="Müşteri Memnuniyeti">
            Sizin mutluluğunuz bizim nihai hedefimizdir. Kaliteli ürünler ve olağanüstü hizmet ile kalıcı ilişkiler kurmaktan gurur duyarız.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default About;
