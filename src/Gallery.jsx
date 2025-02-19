const Gallery = () => {
  const images = [
    { src: "/fox.avif", name: "Winter Fox" },
    { src: "/bird.avif", name: "Cardinal" },
  ];

  return (
    <div id="gallery" className="flex flex-col space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-light tracking-wide uppercase my-12">Gallery</h1>

      <div className="grid grid-cols-1 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <h2 className="tracking-wide italic mb-2">{image.name}</h2>
            <div className="relative">
              <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 space-y-3">
                <button className="w-40 px-6 py-2 bg-white text-black text-sm uppercase font-medium tracking-wide transition-transform duration-300 hover:scale-105">
                  Buy Print
                </button>
                <button className="w-40 px-6 py-2 border border-white text-white text-sm uppercase font-medium tracking-wide transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
