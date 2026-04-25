import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 later: connect to backend API
    setStatus("success");

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-[#10101a] text-white px-6 lg:px-16 xl:px-24 py-16">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h3 className="text-4xl font-light uppercase tracking-[6px]">
            Get in Touch
          </h3>
          <span className="block w-[70px] h-[2px] bg-green-500 mx-auto mt-3"></span>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">

          {/* LEFT INFO */}
          <div className="bg-[#0b0b13] p-8 rounded-xl space-y-6">

            <div>
              <h4 className="text-2xl font-semibold mb-3">
                Let’s talk about your project
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I’m open to freelance, remote, or full-time opportunities.
                If you have any project or idea, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span>emonshimoul@gmail.com</span>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0b0b13] p-8 rounded-xl">

            <h4 className="text-xl font-semibold mb-6">
              Send a Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a25] border border-gray-700 rounded focus:outline-none focus:border-green-500"
                />

                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a25] border border-gray-700 rounded focus:outline-none focus:border-green-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject *"
                required
                className="w-full px-4 py-3 bg-[#1a1a25] border border-gray-700 rounded focus:outline-none focus:border-green-500"
              />

              <textarea
                rows="5"
                placeholder="Your message *"
                required
                className="w-full px-4 py-3 bg-[#1a1a25] border border-gray-700 rounded focus:outline-none focus:border-green-500"
              ></textarea>

              <button
                type="submit"
                className="px-6 py-3 bg-green-500 hover:bg-white hover:text-green-500 transition font-medium"
              >
                Send Message
              </button>

              {/* STATUS */}
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Failed to send message.
                </p>
              )}

            </form>

          </div>
        </div>

        {/* MAP */}
        <div className="mt-16 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            className="w-full h-[350px] grayscale"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;