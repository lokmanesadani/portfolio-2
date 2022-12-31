import Layout from "./layouts/layout";
import Introduction from "./components/intro/Introduction";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Sidenav from "./components/sidenav/sidenav";
import { useEffect, useRef, useState } from "react";
function App() {
  const [selectedLink, setSlecectedLink] = useState<string>("");
  const intro = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (intro.current) {
        if (
          window.pageYOffset >=
          intro.current.offsetTop - window.innerHeight / 2.2
        ) {
          setSlecectedLink("intro");
        }
      }
      if (about.current) {
        if (
          window.pageYOffset >=
          about.current.offsetTop - window.innerHeight / 2.2
        ) {
          setSlecectedLink("about");
        }
      }
      if (projects.current) {
        if (
          window.pageYOffset >=
          projects.current.offsetTop - window.innerHeight / 2.2
        ) {
          setSlecectedLink("projects");
        }
      }
    });
  }, []);

  return (
    <Layout>
      <Sidenav selectedLink={selectedLink} />
      <div
        ref={intro}
        id="intro"
        className="h-[calc(100vh-70px)] w-full flex justify-center"
      >
        <Introduction />
      </div>
      <div
        ref={about}
        id="about"
        className="h-[calc(100vh-70px)] w-full flex justify-center"
      >
        <About />
      </div>
      <div
        ref={projects}
        id="projects"
        className="h-[calc(100vh-70px)] w-full flex justify-center"
      >
        <Projects />
      </div>
    </Layout>
  );
}

export default App;
