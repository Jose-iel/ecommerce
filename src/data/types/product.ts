export interface ProductProps {
  id?: number;
  slug: string;
  image: string;
  title: string;
  description?: string;
  price: number;
  isHighlighted?: boolean;
  featured?: boolean;
}
