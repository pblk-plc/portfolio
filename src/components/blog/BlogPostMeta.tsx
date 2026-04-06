import TagList from "./TagList";
import "./BlogPostMeta.css";

type BlogPostMetaProps = {
  author?: string;
  date: string;
  readTime: string;
  tags?: string[];
};

export default function BlogPostMeta({ author, date, readTime, tags = [] }: BlogPostMetaProps) {
  return (
    <div className="blog-post-meta">
      <div className="blog-post-meta-row">
        {author && <span className="blog-post-meta-author">{author}</span>}
        <span className="blog-post-meta-date">{date}</span>
        <span className="blog-post-meta-dot">&middot;</span>
        <span className="blog-post-meta-read-time">{readTime}</span>
      </div>
      {tags.length > 0 && <TagList tags={tags} />}
    </div>
  );
}
