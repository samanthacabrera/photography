import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    {
      src: "/fox.avif",
      name: "Red Fox",
      description: "A red fox curled up in the snow, conserving warmth in the cold. At the perfect moment, it lifted its head, briefly alert before settling again. The early morning light highlights the texture of its thick winter coat in its natural habitat.",
      date: "January 2025",
      place: "Breckenridge, CO, USA",
    },
    {
      src: "/bird.avif",
      name: "Cardinal",
      description: "A cardinal perched on a snow-covered branch, its feathers providing a sharp contrast against the winter landscape. The bird remained still for a brief moment before continuing its search for food, offering a clear view of its natural form in cold conditions.",
      date: "December 2024",
      place: "Nederlands, CO, USA",
    },
  ];

  return (
    <div id="gallery" className="flex flex-col space-y-8 max-w-6xl mx-auto pt-20">
      <h1 className="text-3xl font-light tracking-wide uppercase my-12">Gallery</h1>

      <div className="grid grid-cols-1 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <h2 className="tracking-wide italic mb-2">{image.name}</h2>
            <div className="relative">
              <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 space-y-3">
                <button className="w-40 px-6 py-2 border border-white text-white text-sm uppercase font-medium tracking-wide transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                  Buy Print
                </button>
                <Link 
                  to={`/photo/${encodeURIComponent(image.name)}`} 
                  state={{ 
                    src: image.src, 
                    name: image.name, 
                    description: image.description, 
                    date: image.date, 
                    place: image.place 
                  }} 
                >
                  <button className="w-40 px-6 py-2 border border-white text-white text-sm uppercase font-medium tracking-wide transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
