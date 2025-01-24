import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slidesRef = useRef(null);

  const totalSlides = images.length;

  // Create an array with cloned elements
  const slides = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (slidesRef.current) {
      slidesRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (slidesRef.current) {
      slidesRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    // Checking the boundaries after completing a smooth transition
    if (currentIndex === 0) {
      // If you have moved to the cloned last slide
      setTimeout(() => {
        if (slidesRef.current) {
          slidesRef.current.style.transition = "none"; // Removing animation
        }
        setCurrentIndex(totalSlides); // Move on to the real last slide
      }, 500);
    } else if (currentIndex === totalSlides + 1) {
      // If you switched to the cloned first slide
      setTimeout(() => {
        if (slidesRef.current) {
          slidesRef.current.style.transition = "none"; // Removing animation
        }
        setCurrentIndex(1); // Move on to the real first slide
      }, 500);
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slides}
        ref={slidesRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index + 1 ? styles.active : ""
            }`}
            onClick={() => {
              if (slidesRef.current) {
                slidesRef.current.style.transition = "transform 0.5s ease-in-out";
              }
              setCurrentIndex(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
