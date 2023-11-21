import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
