import myself from "../../assets/images/myself.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="home"
      data-nav-tooltip="Home"
      className="pp-section pp-scrollable"
    >
      <div className="home-banner">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-6">
              <div className="type-box">
                <h6>Hello, I am</h6>
                <h1 className="font-alt">Emon Shimoul</h1>
                <div className="wrapper">
                  <div className="static-txt">I am passionate</div>
                  <ul className="dynamic-txts">
                    <li>
                      <span>Developer</span>
                    </li>
                    <li>
                      <span>Programmer</span>
                    </li>
                    <li>
                      <span>Freelancer</span>
                    </li>
                  </ul>
                </div>
                <p className="desc">
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <div className="btn-bar">
                  <a
                    className="px-btn px-btn-theme"
                    href="Shimoul-Uddin-Emon.pdf"
                    download="Shimoul-Uddin-Emon.pdf"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hb-img text-center mb-3">
                <img className="rounded-circle" src={myself} title="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
