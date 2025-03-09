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
    <>
      <Header />
      <main className="main-left pp-main-section">
        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Services />} path="/services"></Route>
          <Route element={<Portfolio />} path="/portfolio/*"></Route>
          <Route element={<ContactMe />} path="/contactme"></Route>
          <Route element={<Blogs />} path="/blogs"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
