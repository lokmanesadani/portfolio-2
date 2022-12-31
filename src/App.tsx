import Layout from "./layouts/layout";
import Introduction from "./components/intro/Introduction";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div id="intro" className="h-screen pt-20 w-full">
          <Introduction />
        </div>
        <div id="about" className="h-screen w-full">
          <About />
        </div>
        <div id="projects" className="h-screen w-full">
          <Projects />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
