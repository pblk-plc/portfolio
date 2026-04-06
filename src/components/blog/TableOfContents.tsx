import { useState, useEffect } from "react";
import "./TableOfContents.css";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  headingSelector?: string;
  containerSelector?: string;
};

export default function TableOfContents({
  headingSelector = "h2, h3",
  containerSelector = ".page-container",
}: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.querySelector(containerSelector) ?? document;
    const headings = container.querySelectorAll(headingSelector);
    const tocItems: TocItem[] = [];

    headings.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-") ?? "";
      }
      tocItems.push({
        id: el.id,
        text: el.textContent ?? "",
        level: parseInt(el.tagName[1]),
      });
    });

    setItems(tocItems);
  }, [headingSelector, containerSelector]);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="toc">
      <ul className="toc-list">
        {items.map(({ id, text, level }) => (
          <li
            key={id}
            className={`toc-item toc-level-${level}${id === activeId ? " toc-active" : ""}`}
          >
            <a href={`#${id}`} className="toc-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
