import Badge from "../foundation/Badge";
import "./TagList.css";

type TagListProps = {
  tags: string[];
  onTagClick?: (tag: string) => void;
  activeTag?: string;
};

export default function TagList({ tags, onTagClick, activeTag }: TagListProps) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`tag-list-item${tag === activeTag ? " tag-active" : ""}`}
          onClick={() => onTagClick?.(tag)}
          role={onTagClick ? "button" : undefined}
          tabIndex={onTagClick ? 0 : undefined}
          aria-pressed={onTagClick ? tag === activeTag : undefined}
          onKeyDown={(e) => {
            if (onTagClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onTagClick(tag);
            }
          }}
        >
          <Badge variant={tag === activeTag ? "filled" : "outline"}>{tag}</Badge>
        </span>
      ))}
    </div>
  );
}
