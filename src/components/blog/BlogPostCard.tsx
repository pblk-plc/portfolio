import { Link } from "react-router-dom";
import Badge from "../foundation/Badge";
import "./BlogPostCard.css";

type BlogPostCardProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
};

export default function BlogPostCard({
  title,
  excerpt,
  date,
  readTime,
  tags,
  slug,
}: BlogPostCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="blog-post-card">
      <h3 className="blog-post-card-title">{title}</h3>
      <p className="blog-post-card-excerpt">{excerpt}</p>
      <div className="blog-post-card-meta">
        <span className="blog-post-card-date">{date}</span>
        <span className="blog-post-card-dot">&middot;</span>
        <span className="blog-post-card-read-time">{readTime}</span>
      </div>
      {tags.length > 0 && (
        <div className="blog-post-card-tags">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
