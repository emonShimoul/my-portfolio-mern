import "./ContactMe.css";
const ContactMe = () => {
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 m-15px-tb">
            <div className="contact-info">
              <h4>What`s your story? Get in touch</h4>
              <p>
                My services is affordable and maintain the best quality work for
                you. If you have any query or question feel free to contact me!!
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map"></i>
                  <span className="media-body">Dhaka, Bangladesh</span>
                </li>
                <li className="media">
                  <i className="ti-email"></i>
                  <span className="media-body">emonshimoul@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile"></i>
                  <span className="media-body">+880 1681-171757</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        required
                      />
                      <div
                        data-lastpass-icon-root="true"
                        style={{
                          position: "relative !important",
                          height: "0px !important",
                          width: "0px !important",
                          float: "left !important",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="5"
                        className="form-control"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <input className="px-btn px-btn-theme" type="submit" />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: "none" }}
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.263549080637!2d90.41202048546468!3d23.831689628559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1741548146322!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
