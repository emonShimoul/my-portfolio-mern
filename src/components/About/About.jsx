import { Link } from "react-router-dom";
import "./About.css";
import magento from "../../assets/images/magento.png";
import aboutMe from "../../assets/images/about-me-dark.png";
import react from "../../assets/images/react.png";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src={aboutMe} title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>Hey! Nice to see you !!</h3>
                <p>
                  I&apos;m a Front-End Developer with a huge love for{" "}
                  <i>ReactJS</i>. Currently, I&apos;m open to work and
                  employment opportunities. <br /> I am specialized on HTML,
                  CSS, Tailwind, Javascript and ReactJS. I love to read books
                  and listen to music. Currently I am working with NodeJS,
                  ExpressJS and MongoDB. I am dedicated to building easy-to-use,
                  user-friendly web app.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">50+</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">20+</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <Link className="px-btn px-btn-theme" to="/contactme">
                    <span>Contact Me</span>
                  </Link>
                  <Link className="px-btn px-btn-theme" to="/portfolio">
                    <span>Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated"></div>
        <div className="title">
          <h3>Courses &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2023 (3 Months)</span>
                <h6>Web Development</h6>
                <p>LICT, Bangladesh Computer Council(BCC)</p>
              </li>
              <li>
                <span>2024 (6 Months)</span>
                <h6>Complete Web Development</h6>
                <p>Programming Hero</p>
              </li>
              <li>
                <span>2024 (37.5 Total Hours)</span>
                <h6>Modern React with Redux</h6>
                <p>Udemy</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                Responsible, highly resourceful, detail-oriented, reliable,
                goal-oriented, relentless, self-motivated, open-minded, and
                willing to learn. I have gained hands-on experience creating
                websites and applications in Front-End development.
              </p>
              <div className="skill-lt">
                <h6>HTML &amp; CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="92%"></span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="86%"></span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Bootstrap</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="72%"></span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="88%"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated"></div>
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src={magento} title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right mt-3">
                  <h6>Magento Theme Developer</h6>
                  <label>AminTech | Office | June 2020 - December 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    During my job with AminTech, I gained hands-on experience
                    coding websites and applications in Magento 2. One of my
                    projects was developing themes for an e-commerce website
                    using Magento. Through my job, I also gained valuable
                    teamwork and communication skills that will make me a great
                    asset to Amin Tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src={react} title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right mt-1">
                  <h6>Front-End Developer (React)</h6>
                  <label>Freelance | Remote | Jan 2021 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    I have worked as a Web Developer in Magento 2 Development
                    for a long time. I have hands-on experience in JavaScript.
                    As I am passionate to javascript I have completed some
                    courses on React and also done a lot of projects using
                    React. I have also worked with Firebase Authentication, JWT
                    Token etc. At present I am continuing my study as a MERN
                    stack developer. My works can be found in
                    <Link to="/work" className="text-white fw-bold px-2">
                      My Portfolio
                    </Link>
                    section and also in my
                    <Link
                      to="https://github.com/emonShimoul"
                      className="text-white fw-bold ps-2"
                      target="_blank"
                    >
                      Github
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
