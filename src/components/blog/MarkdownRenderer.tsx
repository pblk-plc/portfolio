import type { ContentBlock } from "../../lib/markdown";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const HEADING_TAGS: HeadingTag[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

function headingTag(level: number, levelOffset = 2): HeadingTag {
  const clamped = Math.max(1, Math.min(6, level + levelOffset));
  return HEADING_TAGS[clamped - 1];
}

type MarkdownRendererProps = {
  blocks: ContentBlock[];
  headingOffset?: number;
};

export default function MarkdownRenderer({ blocks, headingOffset = 2 }: MarkdownRendererProps) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = headingTag(block.level, headingOffset);
          return <Tag key={i}>{block.text}</Tag>;
        }
        return <p key={i}>{block.text}</p>;
      })}
    </>
  );
}
