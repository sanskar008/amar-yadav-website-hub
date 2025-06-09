import React from "react";

const CarouselSection = () => {
  const images = [
    { src: "amar.jpg", alt: "Slide 1" },
    { src: "amar2.jpg", alt: "Slide 2" },
    { src: "cm.jpeg", alt: "Slide 3" },
    { src: "pm.jpg", alt: "Slide 3" },
  ];

  // Duplicate images exactly twice for seamless scroll
  const duplicatedImages = Array(5).fill(images).flat();

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="flex whitespace-nowrap animate-scroll" style={{ gap: 0 }}>
        {duplicatedImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="inline-block h-48 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
