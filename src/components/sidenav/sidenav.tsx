import "./sidenav.scss";
import { useEffect, useState } from "react";
import Logo from "./../logo";
interface SideNavItem {
  icon: string;
  id: string;
}
const Sidenav = (props: { selectedLink: string }) => {
  const [windowTop, setWindowTop] = useState<boolean>(true);
  const [selectedLink, setSelectedLink] = useState<string>("");
  const [automatic, setAutomatic] = useState<boolean>(false);
  const items: SideNavItem[] = [
    { icon: "Home", id: "intro" },
    { icon: "About", id: "about" },
    { icon: "Projects", id: "projects" },
    { icon: "Contact", id: "projects" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowTop(window.pageYOffset > 10);
    });
  }, []);
  const scrollTo = (div: string) => {
    const element = document.getElementById(`${div}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (!automatic) {
      setSelectedLink(props.selectedLink);
    }
  }, [props.selectedLink]);
  return (
    <div className={`sidenav z-50 ${windowTop ? " bg-slate-900" : ""}`}>
      <ul>
        <div className="text-3xl font-monterastBold italic mr-auto text-white">
          <Logo height={50} />
        </div>
        {items.map((item, index) => {
          return (
            <a
              onClick={() => {
                setSelectedLink(item.id);
                setAutomatic(true);
                scrollTo(item.id);
                setTimeout(() => {
                  setAutomatic(false);
                }, 1000);
              }}
              className={`link `}
              key={index}
            >
              {item.icon}
              <span
                className={`active ${
                  selectedLink === item.id ? " w-full" : " w-0"
                }`}
              ></span>
            </a>
          );
        })}
        <li>Download CV</li>
      </ul>
    </div>
  );
};

export default Sidenav;
