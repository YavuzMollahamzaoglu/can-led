// FIX: Added type definitions for Project and ProjectCategory to resolve module errors.
export enum ProjectCategory {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
  // Optional image focal position for card thumbnails
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
