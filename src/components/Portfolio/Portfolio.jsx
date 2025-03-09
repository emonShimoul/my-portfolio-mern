import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./Portfolio.css";
import PortfolioProject from "../PortfolioProject/PortfolioProject";
import { useFetch } from "../../hooks/useFetch";

const Portfolio = () => {
  const location = useLocation();

  const allData = useFetch("data.json");
  // console.log(allData?.data);

  const cssData = useFetch("cssData.json");
  const jsData = useFetch("jsData.json");
  const reactData = useFetch("reactData.json");
  // console.log(projects);

  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-tab-titles">
          <ul className="filter nav">
            <li className="portfolio-tab-links">
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "active" : ""}
              >
                All
              </Link>
            </li>
            <li className="portfolio-tab-links">
              <NavLink to="css">CSS / Bootstrap</NavLink>
            </li>
            <li className="portfolio-tab-links">
              <NavLink to="js">JavaScript</NavLink>
            </li>
            <li className="portfolio-tab-links">
              <NavLink to="react">React</NavLink>
            </li>
          </ul>
        </div>

        <div className="portfolio-tab-contents active-tab">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {location.pathname === "/portfolio" &&
              allData?.data?.map((project) => (
                <PortfolioProject
                  heading="All Projects"
                  key={project.id}
                  project={project}
                ></PortfolioProject>
              ))}

            <Routes>
              <Route
                path="all"
                element={allData?.data?.map((project) => (
                  <PortfolioProject
                    key={project.id}
                    project={project}
                  ></PortfolioProject>
                ))}
              ></Route>
              <Route
                path="css"
                element={cssData?.data?.map((project) => (
                  <PortfolioProject
                    key={project.id}
                    project={project}
                  ></PortfolioProject>
                ))}
              ></Route>
              <Route
                path="js"
                element={jsData?.data?.map((project) => (
                  <PortfolioProject
                    key={project.id}
                    project={project}
                  ></PortfolioProject>
                ))}
              ></Route>
              <Route
                path="react"
                element={reactData?.data?.map((project) => (
                  <PortfolioProject
                    key={project.id}
                    project={project}
                  ></PortfolioProject>
                ))}
              ></Route>
            </Routes>
          </div>
        </div>

        <div className="col-12 all-projects more-button">
          <Link
            className="px-btn px-btn-theme"
            to="https://github.com/emonShimoul"
            target="_blank"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
