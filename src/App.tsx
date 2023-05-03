import Layout from "./layouts/layout";
import Introduction from "./pages/intro/Introduction";
import About from "./pages/About/about";
import Projects from "./pages/projects/projects";
import Sidenav from "./components/sidenav/sidenav";
import Contact from "./pages/contact/contact";
import Brands from "./components/brands";
import Experience from "./pages/Experience/experience";
import Footer from "./pages/Footer/Footer";
const items = [
  { element: About, id: "about" },
  // { element: Experience, id: "experience" },
  { element: Projects, id: "projects" },
  { element: Contact, id: "contact" },
];
function App() {
  return (
    <Layout>
      <Sidenav />
      <Brands />
      <div
        id="intro"
        className="section w-full flex justify-center overflow-x-hidden "
      >
        <Introduction />
      </div>
      {items.map((item, index) => (
        <div
          key={item.id}
          id={item.id}
          className="section w-full flex justify-center overflow-x-hidden "
        >
          {<item.element index={index + 1} />}
        </div>
      ))}
      <div className="section w-full flex justify-center overflow-hidden ">
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
