import { useState } from "react";
import PortfolioProject from "../PortfolioProject/PortfolioProject";
import { useFetch } from "../../hooks/useFetch";

const Portfolio = () => {
  const response = useFetch("data.json");
  const projects = response?.data?.data || response?.data || [];
  
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "css", label: "CSS / Bootstrap" },
    { id: "js", label: "JavaScript" },
    { id: "react", label: "React" },
  ];

  // 🔥 Filter logic
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects?.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen bg-[#10101a] text-white px-6 lg:px-16 py-12">
      
      {/* TITLE */}
      <div className="mb-10">
        <h3 className="text-3xl uppercase tracking-[6px] relative inline-block">
          My Portfolio.
          <span className="block w-[60px] h-[2px] bg-green-500 mt-2"></span>
        </h3>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative text-sm uppercase tracking-[2px] pb-1 transition ${
              activeTab === tab.id
                ? "text-green-500"
                : "text-white/80 hover:text-white"
            }`}
          >
            {tab.label}

            {/* underline */}
            {activeTab === tab.id && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
            )}
          </button>
        ))}
      </div>

      {filteredProjects?.length === 0 && (
        <p className="text-gray-400">No projects found</p>
      )}

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project) => (
          <PortfolioProject key={project.id} project={project} />
        ))}
      </div>

      {/* MORE BUTTON */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/emonShimoul"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-500 text-white px-6 py-2 font-semibold shadow hover:bg-white hover:!text-black transition"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;