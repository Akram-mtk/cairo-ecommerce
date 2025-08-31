import { useState } from "react";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://img.freepik.com/photos-gratuite/cygne-noir-cygnus-atratus-illustre-par-elizabeth-gould_53876-65218.jpg?semt=ais_hybrid&w=740&q=80", // Replace with your image paths
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAbYvJro1wsCAQXMuu5ZUJ-dfohUNjTxjBg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp41wXAhEPI3LuN30sxxN47gk8YstxTsuX10WdvDbN_U8xg18QxDvg_8Y6H25XGZ9_Yac&usqp=CAU",
  ];

  const totalImages = images.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <div className="relative w-full sm:w-4/5 m-auto h-64 bg-gray-200 overflow-hidden">
      <div
        className="flex transition-all duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Discount ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m382-480 294 294q15 15 14.5 35T675-116q-15 15-35 15t-35-15L297-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T676-844q15 15 15 35t-15 35L382-480Z"/></svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
      </button>
    </div>
  );
}

export default ImageSlider;
