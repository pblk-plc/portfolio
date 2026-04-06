import PhotoGrid from "../components/photography/PhotoGrid";
import CategoryCard from "../components/photography/CategoryCard";
import { getAllCategories } from "../content/photos";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const categories = getAllCategories();

export default function Photography() {
  useDocumentTitle("Photography");
  return (
    <div>
      <h2>Photography</h2>
      <p>Select a category to browse.</p>

      <PhotoGrid minColumnWidth="260px" gap="12px">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            name={cat.name}
            slug={cat.slug}
            coverImage={cat.coverImage}
            count={cat.photos.length}
          />
        ))}
      </PhotoGrid>
    </div>
  );
}
