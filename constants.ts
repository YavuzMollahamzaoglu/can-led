import { Project, ProjectCategory } from './types';

export const COMPANY_NAME = "CAN LED";
export const PHONE_NUMBER = "0541 722 47 88";
export const WHATSAPP_LINK = "https://wa.me/905417224788";
export const EMAIL_ADDRESS = "info@canledtr.com";
export const INSTAGRAM_USERNAME = "canledtr";
export const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_USERNAME}`;
export const FACEBOOK_USERNAME = "Mesut Can";
export const FACEBOOK_LINK = "https://www.facebook.com/your-profile-link"; // Replace with actual link

// Ensure asset paths work both locally and on GitHub Pages
const BASE: string = (import.meta as any).env?.BASE_URL || '/';

export const NAV_LINKS = [
  { name: 'Ürünlerimiz', href: '#products' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'Projelerimiz', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gece Kulübü & Bar Ekranı',
    category: ProjectCategory.Indoor,
    description: 'Mekanınıza özel, dikkat çekici ve dinamik görseller sunan canlı iç mekan LED ekran çözümleri.',
    imageUrl: `${BASE}images/ic-mekan1.jpeg`,
  },
  {
    id: 2,
    title: 'Havaalanı Bilgi Panosu',
    category: ProjectCategory.Indoor,
    description: 'Yolcular için net, okunaklı ve anlık bilgi akışı sağlayan yüksek çözünürlüklü bilgilendirme ekranları.',
    imageUrl: `${BASE}images/dis-mekan1.jpeg`,
  },
  {
    id: 3,
    title: 'Restoran Dış Mekan Tabela',
    category: ProjectCategory.Outdoor,
    description: 'Hava koşullarına dayanıklı, menü ve promosyonlarınızı sergileyen parlak ve etkili dış mekan LED tabelalar.',
    imageUrl: `${BASE}images/restoran-dis-mekan.jpeg`,
  },
  {
    id: 4,
    title: 'İç Mekan Video Duvarı',
    category: ProjectCategory.Indoor,
    description: 'Restoran, mağaza ve lobilerde marka kimliğini güçlendiren, ambiyans yaratan etkileyici video duvarları.',
    imageUrl: `${BASE}images/ic-mekan-video.jpeg`,
  },
  {
    id: 5,
    title: 'LED Poster & Totem Ekran',
    category: ProjectCategory.Indoor,
    description: 'Fuar, AVM ve mağaza girişleri için taşınabilir, dikey ve yüksek çözünürlüklü dijital poster ekranları.',
    imageUrl: `${BASE}images/totem-ekran.jpeg`,
    imagePosition: 'bottom',
  },
  {
    id: 6,
    title: 'Bina Cephe Reklamcılığı',
    category: ProjectCategory.Outdoor,
    description: 'Şehir silüetinde fark yaratan, büyük ölçekli ve etkileyici dış cephe LED giydirme projeleri.',
    imageUrl: `${BASE}images/bina-cephe-reklam.jpeg`,
  },
];