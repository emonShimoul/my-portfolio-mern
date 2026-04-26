import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const PortfolioProject = ({ project }) => {
  const { image, title, desc, livelink, github, category } = project;

  const categoryColors = {
    css: "bg-cyan-500",
    js: "bg-amber-500",
    react: "bg-rose-500",
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">

      {/* CATEGORY BADGE */}
      <span className = {`${categoryColors[category]} absolute top-3 left-3 z-20 text-white text-xs px-2 py-1 uppercase tracking-wide`}>
        {category?.toUpperCase()}
      </span>

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 transition duration-500 flex flex-col justify-center items-center text-center p-4">
        
        <h3 className="text-white text-xl font-semibold mb-2">
          {title?.toUpperCase()}
        </h3>

        {desc && (
          <p className="text-gray-300 text-sm mb-4">
            {desc}
          </p>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3">
          <a
            href={livelink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 text-sm hover:bg-white hover:!text-green-500 transition"
          >
            Live <FaExternalLinkAlt />
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-2 py-2 text-sm hover:bg-white hover:!text-black transition"
            >
              GitHub <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

PortfolioProject.propTypes = {
    project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    livelink: PropTypes.string,
    github: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default PortfolioProject;