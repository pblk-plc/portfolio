import { Link } from "react-router-dom";
import "./CategoryCard.css";

type CategoryCardProps = {
  name: string;
  slug: string;
  coverImage: string;
  count?: number;
};

export default function CategoryCard({ name, slug, coverImage, count }: CategoryCardProps) {
  return (
    <Link to={`/photography/${slug}`} className="category-card">
      <div className="category-card-image-wrap">
        <img src={coverImage} alt={name} className="category-card-image" />
      </div>
      <div className="category-card-info">
        <span className="category-card-name">{name}</span>
        {count !== undefined && <span className="category-card-count">{count}</span>}
      </div>
    </Link>
  );
}
