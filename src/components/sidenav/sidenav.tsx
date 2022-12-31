import "./sidenav.scss";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
interface SideNavItem {
  icon: string;
  id: string;
}
const Sidenav = () => {
  const items: SideNavItem[] = [
    { icon: "Home", id: "intro" },
    { icon: "About", id: "about" },
    { icon: "Projects", id: "projects" },
    { icon: "Contact", id: "projects" },
  ];
  const handleScroll = (div: string) => {
    const element = document.getElementById(div);
    return (
      element &&
      window.pageYOffset > element.offsetTop - element.offsetHeight / 2 &&
      window.pageYOffset < element.offsetTop + element.offsetHeight / 2
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sideNav = document.querySelector(".sidenav");
      if (sideNav) {
        if (window.pageYOffset > 0) {
          sideNav.classList.add("bg-slate-900");
        } else {
          sideNav.classList.remove("bg-slate-900");
        }
      }
    });
  }, []);

  return (
    <div className={`sidenav`}>
      <ul>
        <div className="text-3xl font-monterastBold italic mr-auto">LOGO</div>
        {items.map((item, index) => {
          return (
            <Link className="link active" key={index} to={`#${item.id}`} smooth>
              {item.icon}
            </Link>
          );
        })}
        <li>Download CV</li>
      </ul>
    </div>
  );
};

export default Sidenav;
