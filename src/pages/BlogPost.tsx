import { useParams, Link } from "react-router-dom";
import BlogPostMeta from "../components/blog/BlogPostMeta";
import ReadingProgress from "../components/blog/ReadingProgress";
import MarkdownRenderer from "../components/blog/MarkdownRenderer";
import Divider from "../components/foundation/Divider";
import { getPostBySlug } from "../lib/blogLoader";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { SITE } from "../config/site";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");
  useDocumentTitle(post?.frontmatter.title ?? "Post Not Found");

  if (!post) {
    return (
      <div>
        <Link to="/blog" className="back-link">
          &larr; Back to Thoughts
        </Link>
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <article>
      <ReadingProgress />
      <Link to="/blog" className="back-link">
        &larr; Back to Thoughts
      </Link>
      <h2>{post.frontmatter.title}</h2>
      <BlogPostMeta
        author={SITE.author}
        date={post.frontmatter.date}
        readTime={post.frontmatter.readTime}
        tags={post.frontmatter.tags}
      />

      <Divider />

      <MarkdownRenderer blocks={post.blocks} />

      <Divider />

      <Link to="/blog" className="back-link">
        &larr; Back to all posts
      </Link>
    </article>
  );
}
