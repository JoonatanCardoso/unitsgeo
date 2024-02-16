import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import styles from "./Carousel.module.css";

export function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/b1.png", "/images/b2.png", "/images/b3.png", "/images/b4.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      className={styles.container}
      container
      sx={{
        flexDirection: { xs: "row", md: "row" },
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            transition: "opacity 3s ease-in-out",
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </Grid>
  );
}
