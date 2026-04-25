import { FaExternalLinkAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const PortfolioProject = ({ project }) => {
  const { image, title, desc, livelink } = project;

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 transition duration-500 flex flex-col justify-center items-center text-center p-4">
        
        <h3 className="text-white text-xl font-semibold mb-2">
          {title}
        </h3>

        {desc && (
          <p className="text-gray-300 text-sm mb-4">
            {desc}
          </p>
        )}

        <a
          href={livelink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 text-sm hover:bg-green-700 transition"
        >
          View Project <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default PortfolioProject;