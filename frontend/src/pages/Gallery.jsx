import React from "react";
import { assets } from "../assets/assets";

const images = [
  {
    src: assets.image1,
    alt: "Image 1",
    download: "image1.jpg",
  },
  {
    src: assets.image2,
    alt: "Image 2",
    download: "image2.jpg",
  },
  {
    src: assets.image3,
    alt: "Image 3",
    download: "image3.jpg",
  },
  {
    src: assets.image4,
    alt: "Image 4",
    download: "image4.jpg",
  },
  {
    src: assets.image5,
    alt: "Image 5",
    download: "image5.jpg",
  },
  {
    src: assets.image6,
    alt: "Image 6",
    download: "image6.jpg",
  },
  {
    src: assets.image7,
    alt: "Image 7",
    download: "image7.jpg",
  },
  {
    src: assets.image8,
    alt: "Image 8",
    download: "image8.jpg",
  },
  {
    src: assets.image9,
    alt: "Image 9",
    download: "image9.jpg",
  },
  {
    src: assets.image10,
    alt: "Image 10",
    download: "image10.jpg",
  },
  {
    src: assets.image11,
    alt: "Image 11",
    download: "image11.jpg",
  },
  {
    src: assets.image12,
    alt: "Image 12",
    download: "image12.jpg",
  },
  {
    src: assets.image13,
    alt: "Image 13",
    download: "image13.jpg",
  },
  {
    src: assets.image14,
    alt: "Image 14",
    download: "image14.jpg",
  },
  {
    src: assets.image15,
    alt: "Image 15",
    download: "image15.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      {/* Gallery Header */}
      <h2 className="text-4xl font-extrabold text-center text-maroon mb-10 mt-18">
        திருக்கோவில் புகைப்படங்கள்
      </h2>

      {/* Description */}
      <p className="text-lg text-center text-gray-700 mb-12">
        இந்தப் பக்கத்தில், நமது திருக்கோவிலின் புகைப்படங்களைக் காணலாம். இவற்றில்
        ஆலயத்தின் அழகிய வடிவமைப்புகள், பண்டிகைகள் மற்றும் பூஜைகள் ஆகியவை உள்ளன.
        இவை ஒவ்வொன்றும் திருக்கோவிலின் ஆன்மிகம் மற்றும் பாரம்பரியத்தை
        வெளிப்படுத்துகின்றன. உங்கள் வசதிக்காக, இந்த படங்களை பதிவிறக்கம் செய்யும்
        வசதி வழங்கப்பட்டுள்ளது.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              {/* Image Info */}
              <h3 className="text-xl font-bold mb-4">{image.alt}</h3>
              <p className="text-sm mb-4">{image.description}</p>{" "}
              {/* Description */}
              {/* Buttons */}
              <div className="flex space-x-4">
                {/* View Button */}
                <a
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
                >
                  காண்க
                </a>

                {/* Download Button */}
                <a
                  href={image.src}
                  download={image.download}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition duration-300"
                >
                  பதிவிறக்கம்
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
