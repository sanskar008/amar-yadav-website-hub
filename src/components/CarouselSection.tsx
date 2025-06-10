import React from "react";

const CarouselSection = () => {
  const images = [
    { src: "amar.jpg", alt: "Slide 1" },
    { src: "2.jpg", alt: "Slide 2" },
    { src: "3.jpg", alt: "Slide 3" },
    { src: "4.jpg", alt: "Slide 4" },
    { src: "5.jpg", alt: "Slide 5" },
    { src: "6.jpg", alt: "Slide 6" },
    { src: "7.jpg", alt: "Slide 7" },
    { src: "8.jpg", alt: "Slide 8" },
    { src: "9.jpg", alt: "Slide 9" },
    { src: "10.jpg", alt: "Slide 10" },
    { src: "11.jpg", alt: "Slide 11" },
    { src: "12.jpg", alt: "Slide 12" },
    { src: "13.jpg", alt: "Slide 13" },
    { src: "14.jpg", alt: "Slide 14" },
    { src: "15.jpg", alt: "Slide 15" },
    { src: "16.jpg", alt: "Slide 16" },
    { src: "17.jpg", alt: "Slide 17" },
    { src: "18.jpg", alt: "Slide 18" },
    { src: "19.jpg", alt: "Slide 19" },
    { src: "20.jpg", alt: "Slide 20" },
    { src: "21.jpg", alt: "Slide 21" },
    { src: "22.jpg", alt: "Slide 22" },
    { src: "23.jpg", alt: "Slide 23" },
    { src: "24.jpg", alt: "Slide 24" },
    { src: "25.jpg", alt: "Slide 25" },
    { src: "26.jpg", alt: "Slide 26" },
    { src: "27.jpg", alt: "Slide 27" },
  ];

  const repeatedImages = [...images, ...images]; // Duplicate once for seamless scroll

  return (
    <div className="relative w-full overflow-hidden bg-white mb-6">
      {/* Top white separator */}
      <div className="h-[4px] bg-white" />

      {/* Left gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-20" />

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-20" />

      {/* Scrolling container */}
      <div className="flex animate-scroll whitespace-nowrap gap-0.5">
        {repeatedImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="h-52 w-auto object-cover inline-block hover:scale-105 shadow-md transition-transform duration-300"
            draggable={false}
          />
        ))}
      </div>

      {/* Bottom white separator */}
      <div className="h-[4px] bg-white" />
    </div>
  );
};

export default CarouselSection;
