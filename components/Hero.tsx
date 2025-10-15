import React, { useState, useEffect } from 'react';

// Vite public/ klasörü: /public/videos/* build sonrası köke kopyalanır ve
// import.meta.env.BASE_URL ile birlikte servis edilir.
const BASE = (import.meta as any).env?.BASE_URL || '/';
const SLIDE_DURATION_MS = 10000; // her slaytın görünme süresi: 10sn

const fallbackVideos = [
  `${'https://videos.pexels.com/video-files/2882234/2882234-hd_1920_1080_25fps.mp4'}`,
  `${'https://videos.pexels.com/video-files/3254011/3254011-hd_1920_1080_25fps.mp4'}`,
  `${'https://videos.pexels.com/video-files/8038755/8038755-hd_1920_1080_24fps.mp4'}`,
];

function buildLocalVideoList() {
  // Kullanıcı README'de önerildiği gibi hero-1.mp4, hero-2.mp4 ... yükleyebilir.
  // Statik ortamda dosya varlığını tespit edemeyiz; bu yüzden ilk 6 ad için
  // potansiyel yolları dener, yüklenemeyenleri runtime'da atlarız.
  // 1..8 arası dosyaları sırayla dener (hero-1.mp4 ... hero-8.mp4)
  const candidates = Array.from({ length: 8 }, (_, i) => `${BASE}videos/hero-${i + 1}.mp4`);
  return candidates;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sources, setSources] = useState<string[]>(() => [
    ...buildLocalVideoList(),
  ]);

  useEffect(() => {
    if (sources.length === 0) return;
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sources.length);
    }, SLIDE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [currentSlide, sources.length]);

  useEffect(() => {
    if (currentSlide >= sources.length && sources.length > 0) {
      setCurrentSlide(0);
    }
  }, [sources.length, currentSlide]);

  const handleSourceError = (badUrl: string) => {
    setSources((prev) => {
      const filtered = prev.filter((u) => u !== badUrl);
      return filtered.length > 0 ? filtered : [...fallbackVideos];
    });
  };

  return (
    <section className="relative h-screen min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {sources.map((url, index) => (
           <video
            key={url}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            src={url}
            autoPlay
            muted
            loop
            playsInline
            onError={() => handleSourceError(url)}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4 animate-fade-in-down">
          VİZYONUNUZU AYDINLATIYORUZ
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          İzleyicileri büyüleyen ve mekanlara hayat veren özel LED ekran çözümleri yaratıyoruz.
        </p>
        <a
          href="#projects"
          className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          PROJELERİMİZİ İNCELEYİN
        </a>
      </div>
    </section>
  );
};

export default Hero;