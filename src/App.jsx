import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="min-h-screen bg-[#10101a] text-white">
      {/* Sidebar */}
      <Header />

      <main className="lg:ml-[250px] relative z-30 bg-[#10101a] pt-[60px] lg:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
