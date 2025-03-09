import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PortfolioProject = ({ project }) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, desc, livelink } = project;
  return (
    <div>
      <div className="col">
        <div className="card h-100 portfolio-card">
          <img src={image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title fw-bold">
              <em>{title}</em>
            </h5>
            <p className="card-text">{desc}</p>
            <div className="text-end">
              <Link
                to={livelink}
                className="text-success fw-bold"
                target="_blank"
              >
                View Full Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
