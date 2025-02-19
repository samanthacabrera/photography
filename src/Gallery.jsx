import { useState } from "react";

const Gallery = () => {
  const images = [
    { src: "/fox.avif", name: "Winter Fox", category: "Animals" },
    { src: "/bird.avif", name: "Cardinal", category: "Animals" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="flex flex-col space-y-8 max-w-6xl mx-auto">
      <div className="my-8 flex justify-start">
        <label className="mx-2">Filter:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-black bg-white px-4 py-2 cursor-pointer"
        >
          <option value="All">All</option>
          {[...new Set(images.map((img) => img.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="flex flex-col p-4">
              <h2 className="text-2xl uppercase mb-2">{image.name}</h2>
              <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
            </div>
          ))
        ) : (
          <p className="text-4xl font-bold text-center uppercase">No images found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
