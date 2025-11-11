import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
import artwork7 from "@/assets/artwork-7.jpg";
import artwork8 from "@/assets/artwork-8.jpg";
import artwork9 from "@/assets/artwork-9.jpg";
import artwork10 from "@/assets/artwork-10.jpg";
import artwork18 from "@/assets/artwork-18.jpg";

export interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  medium: string;
  size: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "The Joyful Scribe",
    category: "Caricature",
    image: artwork1,
    description: "A colorful caricature of a woman in a traditional saree, poised to write.",
    medium: "Pencil on Paper",
    size: "18 × 24 inches"
  },
  {
    id: "2",
    title: "Gentle Gaze",
    category: "Portrait",
    image: artwork2,
    description: "A detailed black and white pencil portrait held against a natural backdrop.",
    medium: "Mixed Media",
    size: "24 × 18 inches"
  },
  {
    id: "3",
    title: "The Digital Creator",
    category: "Caricature",
    image: artwork3,
    description: "A pen-and-ink caricature, highlighted with yellow, capturing a woman at her keyboard.",
    medium: "Graphite",
    size: "16 × 20 inches"
  },
  {
    id: "4",
    title: "Family Stillness",
    category: "Stylized & Conceptual",
    image: artwork4,
    description: "A minimalist ink and watercolor sketch of a family of four seated together.",
    medium: "Ink and Pencil",
    size: "20 × 16 inches"
  },
  {
    id: "5",
    title: "Deep-Sea Bloom",
    category: "Stylized 7 Conceptual",
    image: artwork5,
    description: "A textured painting of a surreal figure holding a pink lotus underwater.",
    medium: "Charcoal and Ink",
    size: "24 × 18 inches"
  },
  {
    id: "6",
    title: "The Casual Stance",
    category: "Caricature",
    image: artwork6,
    description: "A clean, black and white ink caricature of a man with styled hair.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
  {
    id: "7",
    title: "Framed by Film",
    category: "Caricature",
    image: artwork7,
    description: "An ink caricature of a smiling man, with a film strip curling around him.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
  {
    id: "8",
    title: "Radiant Smile",
    category: "Portrait",
    image: artwork8,
    description: "A striking black and white ink-wash portrait of a smiling woman.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
  {
    id: "9",
    title: "A stroll by the Palms",
    category: "Nature",
    image: artwork9,
    description: "A light, airy watercolor landscape depicting a family and a cyclist.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
  {
    id: "10",
    title: "Hillside Village Path",
    category: "Nature",
    image: artwork10,
    description: "A vibrant, detailed watercolor painting of a winding road through a rustic village.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
   {
    id: "18",
    title: "Temple Gateway",
    category: "Architecture",
    image: artwork18,
    description: "An ink and watercolor sketch of the detailed entrance to the Paramekkavu Temple.",
    medium: "Technical Pen",
    size: "22 × 16 inches"
  },
];

export const categories = ["All", "Caricature", "Portrait", "Nature", "Architecture"];
