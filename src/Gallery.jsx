const Gallery = () => {
  const images = [
    { src: "/fox.avif", name: "Winter Fox" },
    { src: "/bird.avif", name: "Cardinal" },
  ];

  return (
    <div id="gallery" className="flex flex-col space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-light tracking-wide uppercase my-12">Gallery</h1>

      <div className="grid grid-cols-1 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="tracking-wide italic mb-2">{image.name}</h2>
            <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
