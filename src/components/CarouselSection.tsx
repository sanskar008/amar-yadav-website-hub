import React from "react";

const CarouselSection = () => {
  const images = [
    { src: "amar.jpg", alt: "Slide 1" },
    { src: "2.jpg", alt: "Slide 2" },
    { src: "3.jpg", alt: "Slide 2" },
    { src: "4.jpg", alt: "Slide 2" },
    { src: "5.jpg", alt: "Slide 2" },
    { src: "6.jpg", alt: "Slide 2" },
    { src: "7.jpg", alt: "Slide 2" },
    { src: "8.jpg", alt: "Slide 2" },
  ];

  // Duplicate images exactly twice for seamless scroll
  const duplicatedImages = Array(3).fill(images).flat();

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
