import { Link } from "react-router-dom";
import "./Blogs.css";
import mongo from "../../assets/images/mongo.png";
import state from "../../assets/images/state.png";

const Blogs = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>My Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link
                  to="https://medium.com/@emonshimoul/what-is-state-in-react-5f1513dfb7e1"
                  target="_blank"
                >
                  <img src={state} title="" alt="" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">25/APR/2023 - React State</div>
                <h6>
                  <Link
                    to="https://medium.com/@emonshimoul/what-is-state-in-react-5f1513dfb7e1"
                    target="_blank"
                  >
                    What is State in React?
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link
                  to="https://medium.com/@emonshimoul/steps-to-connect-mongodb-database-49a1c5f6c30a"
                  target="_blank"
                >
                  <img src={mongo} title="" alt="" />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">25/APR/2023 - mongoDB</div>
                <h6>
                  <Link
                    to="https://medium.com/@emonshimoul/steps-to-connect-mongodb-database-49a1c5f6c30a"
                    target="_blank"
                  >
                    Steps to Connect Mongodb Database
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center more-button">
            <Link
              className="px-btn px-btn-theme"
              to="https://medium.com/@emonshimoul"
              target="_blank"
            >
              More Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
