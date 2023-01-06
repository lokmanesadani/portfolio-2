import Layout from "./layouts/layout";
import Introduction from "./components/intro/Introduction";
import About from "./components/About/about";
import Projects from "./components/projects/projects";
import Sidenav from "./components/sidenav/sidenav";
import { useEffect, useRef, useState } from "react";
import Contact from "./components/contact/contact";
function App() {
  const [selectedLink, setSlecectedLink] = useState<string>("");

  const [trackScroll, setTrackScroll] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutId = useRef<number | null>(null);
  const handleScroll = () => {
    if (trackScroll) {
      setIsScrolling(true);
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionBottom >= window.innerHeight / 2
        ) {
          setSlecectedLink(section.id);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackScroll]);

  const handleButtonClick = (button: string) => {
    setTrackScroll(false);
    setSlecectedLink(button);
    const element = document.getElementById(`${button}`);
    if (element) {
      setTrackScroll(false);
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setTrackScroll(true);
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <Layout>
      <Sidenav
        selectedLink={selectedLink}
        isScrolling={trackScroll}
        scrollTo={handleButtonClick}
      />
      <div
        id="intro"
        className="section w-full flex justify-center overflow-x-hidden "
      >
        <Introduction />
      </div>
      <div
        id="about"
        className="section  w-full flex justify-center bg-slate-900 overflow-x-hidden"
      >
        <About />
      </div>
      <div id="projects" className="section   w-full flex justify-center">
        <Projects />
      </div>
      <div
        id="contact"
        className="section w-full flex justify-center bg-slate-900"
      >
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
