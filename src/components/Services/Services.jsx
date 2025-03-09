import "./Services.css";
const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop ti-desktop"></i>
              <div className="feature-content media-body">
                <h5>Front-End Development</h5>
                <p>
                  I am a Front-end Developer. I am specialized on HTML, CSS,
                  Bootstrap, Javascript and Reactjs. I am dedicated to building
                  easy-to-use, user-friendly websites.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-html5 ti-html5"></i>
              <div className="feature-content media-body">
                <h5>PSD / Figma to HTML</h5>
                <p>
                  I will convert PSD / Figma files to HTML or ReactJS website. I
                  have gained hands-on experience creating websites and
                  applications in Front-End development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target ti-settings"></i>
              <div className="feature-content media-body">
                <h5>Bug Fixing</h5>
                <p>
                  I will fix any bug related to the front end of your website
                  using HTML, CSS, Bootstrap, and Javascript.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile ti-mobile"></i>
              <div className="feature-content media-body">
                <h5>Responsive Design</h5>
                <p>
                  I will Create fully responsive website Using HTML, CSS,
                  Bootstrap and JavaScript for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="separated"></div>
          <div className="title"><h3>Testimonials.</h3></div>
          <p>Testimonial section goes here</p> */}
      </div>
    </section>
  );
};

export default Services;
