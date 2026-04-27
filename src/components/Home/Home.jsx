import myself from "../../assets/images/myself.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#10101a] overflow-hidden"
    >
      <div className="w-full px-16 lg:px-32 grid lg:grid-cols-2 gap-10 items-center relative">

        {/* RIGHT BACKGROUND SHAPE */}
        <div className="hidden lg:block absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0b0b13] rounded-full z-0"></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h6 className="text-xl md:text-2xl font-medium text-white mb-4">
            Hello, I am
          </h6>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Emon Shimoul
          </h1>

          {/* Typing Animation */}
          <div className="flex items-center text-xl md:text-2xl font-medium mb-4">
            <span className="text-white">I am passionate</span>

            <div className="ml-3 h-[40px] overflow-hidden">
              <ul className="text-red-400">
                <li className="typing-item">Developer</li>
                <li className="typing-item">Programmer</li>
                <li className="typing-item">Freelancer</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 max-w-md text-base md:text-lg mb-6">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web
            services and online stores.
          </p>

          <a
            href="Shimoul-Uddin-Emon.pdf"
            download
            className="inline-block bg-green-500 text-white px-6 py-2 shadow-md hover:bg-white hover:text-green-500 transition"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative z-10">
          <img
            src={myself}
            alt="profile"
            className="w-[90%] max-w-[400px] md:max-w-[600px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes slide {
            100% {
              transform: translateY(-120px);
            }
          }

          .animate-slide {
            animation: slide 9s steps(3) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Home;