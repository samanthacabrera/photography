const Gallery = () => {
  const images = [
    { src: '/fox.avif', name: 'winter fox', year: '2024'},
    { src: '/bird.avif', name: 'cardinal', year: '2024'},
  ];

  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col lg:flex-col-reverse">
            <h2 className="text-center lg:text-left">{image.name} </h2>
            <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
