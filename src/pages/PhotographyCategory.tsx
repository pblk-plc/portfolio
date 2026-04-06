import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PhotoGrid from "../components/photography/PhotoGrid";
import ImageLightbox from "../components/Images/ImageLightbox";
import "../components/Images/SingleCenteredImage.css";
import { getCategoryBySlug } from "../content/photos";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function PhotographyCategory() {
  const { category } = useParams<{ category: string }>();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const cat = getCategoryBySlug(category ?? "");
  const photos = cat?.photos ?? [];
  const title = cat?.name ?? category?.replace(/-/g, " ") ?? "Category";
  useDocumentTitle(title);

  return (
    <div>
      <Link to="/photography" className="back-link">
        &larr; All categories
      </Link>
      <h2 style={{ textTransform: "capitalize" }}>{title}</h2>

      {photos.length === 0 ? (
        <p>No photos found for this category.</p>
      ) : (
        <PhotoGrid gap="8px" minColumnWidth="280px">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              className="image-zoom-trigger"
              onClick={() => {
                setLightboxSrc(photo.src);
                setLightboxAlt(photo.alt);
              }}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </PhotoGrid>
      )}

      <ImageLightbox
        src={lightboxSrc ?? ""}
        alt={lightboxAlt}
        isZoomed={lightboxSrc !== null}
        onClose={() => setLightboxSrc(null)}
      />
    </div>
  );
}
