import React from "react";

const Gallery = () => {
  const gallery = [
    "/images/gym13.avif",
    "/images/gym14.avif",
    "/images/gym5.avif",
    "/images/gym19.avif",
    "/images/gym17.avif",
    "/images/gym2.avif",
    "/images/gym8.avif",
    "/images/gym7.avif",
    "/images/gym24.avif",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;