import { useParams, useLocation } from "react-router-dom";

const PhotoPage = () => {
  const { name } = useParams();
  const location = useLocation();
  const { src, description, date, place } = location.state || {}; 

  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col md:flex-row items-center md:items-start gap-12 px-6 md:px-0 pt-32">
      <div className="w-full md:w-1/2">
        {src ? (
          <img src={src} alt={name} className="w-full h-auto object-cover rounded-lg" />
        ) : (
          <p className="text-xl text-gray-400">Image not found.</p>
        )}
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-light uppercase tracking-widest">{name}</h1>
        <p className="leading-relaxed">{description || "No description available."}</p>
        <div className="text-sm">
          <p>{date || "Unknown Date"}</p>
          <p>{place || "Unknown Location"}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
