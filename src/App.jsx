import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Opporunities from "./Pages/Opporunities";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>

          <Route path="/career" element={<Career />}></Route>
          <Route path="/opporunities" element={<Opporunities />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
