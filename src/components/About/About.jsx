import { Link } from "react-router-dom";
import aboutMe from "../../assets/images/about-me-dark.png";

// ===== DYNAMIC DATA (future: from backend) =====

const aboutData = {
  title: "Frontend Developer | MERN Learner",
  desc: `I am a passionate Frontend Developer with strong experience in React, JavaScript, and modern UI development. I focus on building clean, responsive, and user-friendly web applications.

Currently, I am expanding my skills into full-stack development using Node.js, Express, and MongoDB. Alongside development, I have professional experience in digital advertising, which helps me understand both technical and business aspects of online platforms.`,
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Satisfied Clients" },
  ],
};

const skills = [
  { name: "HTML & CSS", level: "95%" },
  { name: "JavaScript", level: "90%" },
  { name: "React", level: "85%" },
  { name: "Tailwind CSS", level: "90%" },
];

const experiences = [
  {
    title: "Digital AdOps Executive",
    company: "Service Engine BPO",
    duration: "Aug 2023 - Present",
    desc: "Working with Google Ad Manager and AdBook platforms to manage, optimize, and monitor digital advertising campaigns. Responsible for ad operations, performance tracking, and ensuring smooth campaign delivery. This role strengthened my analytical thinking and understanding of real-world business systems.",
  },
  {
    title: "Frontend Developer",
    company: "AminTech",
    duration: "June 2020 - December 2022",
    desc: "Worked on frontend development using Magento and JavaScript to build and customize e-commerce websites. Gained strong experience in UI development, debugging, and working in a team environment on real-world projects.",
  },
  {
    title: "Freelance Projects (React)",
    company: "Self-employed",
    duration: "2022 - Present",
    desc: "Developed multiple frontend applications using React, including dynamic interfaces, authentication systems, and API-based projects. Focused on improving UI/UX and writing clean, maintainable code.",
  },
  {
    title: "Full-Stack Development (Learning)",
    company: "Personal Learning",
    duration: "Ongoing",
    desc: "Currently learning and building projects using Node.js, Express, and MongoDB to become a complete MERN stack developer.",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-[#10101a] text-white px-6 lg:px-16 xl:px-24 py-16">

      <div className="max-w-7xl mx-auto">

        {/* ===== TOP SECTION ===== */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 xl:gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutMe}
              alt="About"
              className="w-full max-w-md rounded-xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-4xl xl:text-5xl font-light uppercase tracking-[6px] mb-6">
              About Me
            </h3>

            <h4 className="text-2xl font-semibold mb-4">
              {aboutData.title}
            </h4>

            <p className="text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
              {aboutData.desc}
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mb-8">
              {aboutData.stats.map((stat, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-green-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <Link
                to="/contactme"
                className="px-6 py-2 bg-green-500 hover:bg-white hover:text-green-500 transition"
              >
                Contact Me
              </Link>

              <Link
                to="/portfolio"
                className="px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* ===== SKILLS ===== */}
        <div className="mt-24">
          <h3 className="text-3xl uppercase tracking-[6px] mb-12 text-center">
            Skills
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-8 max-w-6xl mx-auto">

            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div className="mt-24">
          <h3 className="text-3xl uppercase tracking-[6px] mb-12 text-center">
            Experience
          </h3>

          <div className="space-y-8 max-w-6xl mx-auto">

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-[#0b0b13] p-6 rounded-lg hover:bg-[#13131d] transition"
              >
                <h4 className="text-xl font-semibold">
                  {exp.title}
                </h4>

                <p className="text-sm text-gray-400">
                  {exp.company} | {exp.duration}
                </p>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;