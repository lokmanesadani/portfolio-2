import "./sidenav.scss";
import { useEffect, useState } from "react";
import Logo from "./../logo";
interface SideNavItem {
  icon: string;
  id: string;
}
const Sidenav = (props: {
  selectedLink: string;
  isScrolling: boolean;
  scrollTo: (arg0: string) => void;
}) => {
  const [windowTop, setWindowTop] = useState<boolean>(true);
  const [selectedLink, setSelectedLink] = useState<string>("");

  const items: SideNavItem[] = [
    { icon: "Home", id: "intro" },
    { icon: "About", id: "about" },
    { icon: "Projects", id: "projects" },
    { icon: "Contact", id: "contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowTop(window.pageYOffset > 10);
    });
  }, [windowTop]);

  useEffect(() => {
    setSelectedLink(props.selectedLink);
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
                props.scrollTo(item.id);
              }}
              className={`link `}
              key={index}
            >
              {item.icon}
              <span
                className={`active ${
                  selectedLink === item.id ? " w-full" : "hover"
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
