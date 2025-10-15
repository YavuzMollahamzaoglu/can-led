import React from 'react';
const BASE = (import.meta as any).env?.BASE_URL || '/';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Ürünlerimiz</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Her mekana ve ihtiyaca yönelik, yüksek teknolojili iç ve dış mekan LED ekran çözümleri sunuyoruz.
          </p>
        </div>

        {/* Indoor Section - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="pr-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">İç Mekan LED Çözümleri</h3>
            <p className="text-slate-600 mb-6">
              Mağazalar, kontrol odaları, konferans salonları ve TV stüdyoları gibi kapalı alanlar için tasarlanmış yüksek çözünürlüklü ve modüler LED ekranlarımızla, mesajınızı en canlı ve net şekilde hedef kitlenize ulaştırın. İnce tasarım ve kolay kurulum özellikleriyle mekanınıza estetik bir dokunuş katın.
            </p>
            <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> Canlı ve Parlak Renkler</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> Yüksek Yenileme Hızları</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> Geniş İzleme Açıları</li>
            </ul>
            <a href="#projects" className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Uygulamaları İncele
            </a>
          </div>
          <div className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-slate-200 to-slate-400 shadow-md">
            <div className="rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.20)] transition-transform duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] group-hover:-translate-y-1">
              <img
                src={`${BASE}images/ic-mekan1.jpeg`}
                alt="İç Mekan LED Ekran"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Outdoor Section - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-slate-200 to-slate-400 shadow-md md:order-1 order-2">
            <div className="rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.20)] transition-transform duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] group-hover:-translate-y-1">
              <img
                src={`${BASE}images/dis-mekan1.jpeg`}
                alt="Dış Mekan LED Ekran"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-center"
              />
            </div>
          </div>
          <div className="pl-0 md:pl-8 md:order-2 order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Dış Mekan LED Çözümleri</h3>
            <p className="text-slate-600 mb-6">
             Her türlü hava koşuluna dayanıklı, yüksek parlaklık seviyesine sahip dış mekan LED ekranlarımızla reklam ve duyurularınızı geniş kitlelere ulaştırın. Bina cepheleri, stadyumlar, meydanlar ve yol kenarları için ideal olan bu çözümler, günün her saati mükemmel görünürlük sağlar.
            </p>
             <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> IP65 Su ve Toz Koruması</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> Yüksek Parlaklık ve Kontrast</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-secondary mr-2"></i> Dayanıklı ve Uzun Ömürlü</li>
            </ul>
            <a href="#projects" className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Uygulamaları İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;