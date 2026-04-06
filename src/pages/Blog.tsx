import { useState } from "react";
import BlogPostCard from "../components/blog/BlogPostCard";
import TagList from "../components/blog/TagList";
import Divider from "../components/foundation/Divider";
import { getAllPosts, getAllTags } from "../lib/blogLoader";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const posts = getAllPosts();
const allTags = getAllTags();

export default function Blog() {
  useDocumentTitle("Thoughts");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <div>
      <h2>Thoughts</h2>

      <TagList tags={allTags} onTagClick={handleTagClick} activeTag={activeTag ?? undefined} />

      <Divider />

      {filtered.map((post) => (
        <BlogPostCard key={post.slug} {...post} />
      ))}

      {filtered.length === 0 && <p>No posts matching that tag.</p>}
    </div>
  );
}
