import {
  FaLaptopCode,
  FaLayerGroup,
  FaServer,
  FaBullhorn,
} from "react-icons/fa";

// ICON MAP (frontend-only logic layer)
const iconMap = {
  laptop: FaLaptopCode,
  ui: FaLayerGroup,
  server: FaServer,
  marketing: FaBullhorn,
};

const Services = () => {
  // This will later come from backend API
  const services = [
    {
      title: "Frontend Development",
      desc: "I build modern, fast, and responsive web interfaces using React, JavaScript, and Tailwind CSS. My focus is on clean UI, performance, and user experience across all devices.",
      icon: "laptop",
    },
    {
      title: "UI Implementation (Figma to Web)",
      desc: "I convert Figma or PSD designs into pixel-perfect, responsive websites with clean structure, smooth UI behavior, and accurate design implementation.",
      icon: "ui",
    },
    {
      title: "Full-Stack Development (Learning)",
      desc: "I am currently building full-stack skills using Node.js, Express, and MongoDB. I can develop REST APIs, handle databases, and create dynamic web applications.",
      icon: "server",
    },
    {
      title: "Digital Advertising",
      desc: "Experienced in Google Ads and digital marketing strategies. I help improve campaign performance, targeting, and ROI through optimization techniques.",
      icon: "marketing",
    },
  ];

  return (
    <section className="min-h-screen bg-[#10101a] text-white px-6 lg:px-20 py-16">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h3 className="text-4xl font-light uppercase tracking-[8px] inline-block">
          What I Do
        </h3>
        <span className="block w-[70px] h-[2px] bg-green-500 mx-auto mt-3"></span>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
          I combine development, design accuracy, and digital strategy to build modern web experiences.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <div
              key={index}
              className="group bg-[#0b0b13] p-8 rounded-xl transition duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-transparent hover:shadow-xl hover:shadow-green-500/10"
            >

              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/10 text-green-400 text-2xl mb-5 transition group-hover:bg-green-500 group-hover:text-white">
                {Icon && <Icon />}
              </div>

              {/* TITLE */}
              <h5 className="text-xl font-semibold mb-3">
                {service.title}
              </h5>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
                {service.desc}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Services;