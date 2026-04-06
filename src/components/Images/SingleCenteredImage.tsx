import { useEffect, useState } from "react";
import "./SingleCenteredImage.css";
import ImageLightbox from "./ImageLightbox";

type CenteredImageProps = {
  src: string;
  alt?: string;
};

const Orientation = {
  Landscape: "landscape",
  Portrait: "portrait",
};

export const SingleCenteredImage = ({ src, alt = "Image" }: CenteredImageProps) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setDimensions({ height: img.height, width: img.width });
    };
  }, [src]);

  const onOpen = () => {
    setIsZoomed(true);
  };

  const onClose = () => {
    setIsZoomed(false);
  };

  let isImageHorizontal = dimensions.width > dimensions.height;
  let imageOrientation = isImageHorizontal ? Orientation.Landscape : Orientation.Portrait;

  return (
    <div className={`${imageOrientation}-image-container`}>
      <button type="button" className="image-zoom-trigger" onClick={onOpen}>
        <img src={src} className={`centered-${imageOrientation}-image`} alt={alt} />
      </button>
      <ImageLightbox src={src} alt={alt} isZoomed={isZoomed} onClose={onClose} />
    </div>
  );
};
