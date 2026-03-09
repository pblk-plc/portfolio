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

export const SingleCenteredImage = ({
  src,
  alt = "Image",
}: CenteredImageProps) => {
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
  let imageOrientation = isImageHorizontal
    ? Orientation.Landscape
    : Orientation.Portrait;

  return (
    <div className={`${imageOrientation}-image-container`}>
      <img
        src={src}
        className={`centered-${imageOrientation}-image zoomable-image`}
        alt={alt}
        onClick={onOpen}
      />
      <ImageLightbox src={src} isZoomed={isZoomed} onClose={onClose} />
    </div>
  );
};
