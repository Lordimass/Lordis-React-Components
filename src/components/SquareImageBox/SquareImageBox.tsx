import React, { useEffect, useRef, useState } from "react";
import "./squareImageBox.css";
import { AnimatePresence, motion } from "motion/react";
import { MinimalImage } from "../../lib";
import { Carousel, CarouselProps } from "react-bootstrap";
import { CarouselRef } from "react-bootstrap/Carousel";

interface SquareImageBoxProps extends CarouselProps {
  /** Image or images to display. */
  image?: MinimalImage | MinimalImage[];
  /** Size of the box as a dynamic CSS string, defaults to 200px. */
  size?: string;
  /** Loading eagerness of images, "eager" or "lazy". Defaults to `lazy`. */
  loading?: "eager" | "lazy";
  /** Whether hovering over the image should blow it up into a full screen preview. Defaults to `false`. */
  hoverable?: boolean;
}

/**
 * Displays an image coerced into a square box by using blurred versions of the image as letterboxing.
 * When multiple images are supplied, a reactive image carousel is displayed in this same square box.
 */
export default function SquareImageBox({
  image,
  size = "200px",
  loading = "lazy",
  hoverable = false,
  ...props
}: SquareImageBoxProps) {
  const images = image instanceof Array ? image : [image];
  const isCarousel = images.length > 1;

  const [isHoverShowing, setIsHoverShowing] = useState(false);
  const [activeImage, setActiveImage] = useState<MinimalImage | undefined>(
    images[0],
  );
  const carouselRef = useRef<CarouselRef>(null);

  // Track container size
  const [containerSize, setContainerSize] = useState(0);
  useEffect(() => {
    const container = carouselRef.current?.element;
    if (!container) return;

    function updateSize() {
      const container = carouselRef.current?.element;
      if (!container) return;
      setContainerSize(container.offsetWidth ?? 0);
    }

    // Run immediately
    updateSize();
    // Observe the element
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HoverPopup image={activeImage} isHoverShowing={isHoverShowing} />

      <Carousel
        {...props}
        className="square-image-box"
        style={{ width: size, height: containerSize }}
        ref={carouselRef}
        indicators={isCarousel}
        controls={isCarousel}
        onMouseOver={() => setIsHoverShowing(hoverable)}
        onMouseOut={() => setIsHoverShowing(false)}
        onSelect={(eventKey) => setActiveImage(images[eventKey])}
      >
        {images.map((img, i) => (
          <Carousel.Item
            key={i}
            className="square-image-carousel-slide"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
            }}
          >
            <img
              src={img?.uri}
              alt=""
              aria-hidden="true"
              className="square-image-blur"
              loading={loading}
            />

            <div className="square-image-center">
              <Image className="square-image-foreground" img={img} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

function HoverPopup({
  image,
  isHoverShowing,
}: {
  image?: MinimalImage;
  isHoverShowing?: boolean;
}) {
  if (!image?.uri) return null;

  return (
    <AnimatePresence>
      {isHoverShowing ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="image-box-hover"
          style={{ pointerEvents: "none" }}
        >
          <motion.img
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -64 }}
            src={image.uri}
            alt={image.alt}
            aria-hidden="true"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/** Provides an element with a placeholder instead of the image if no image exists */
function Image({
  img,
  className,
  loading,
}: {
  img?: MinimalImage;
  className: string;
  loading?: "eager" | "lazy";
}) {
  if (!img?.uri) {
    return (
      <div className="no-image">
        <span>?</span>
      </div>
    );
  }

  return (
    <img src={img.uri} alt={img.alt} className={className} loading={loading} />
  );
}
