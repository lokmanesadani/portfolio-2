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
  const [opened, setOpened] = useState<boolean>(false);
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
    <div
      className={`sidenav z-50 transition-all ${
        opened ? "max-sm:h-[400px] " : "h-[70px]"
      } ${windowTop ? " bg-slate-900 " : " bg-backgound "}`}
    >
      <ul>
        <div className="text-3xl h-[70px] items-center justify-between flex flex-row grow max-sm:w-full shrink-0 sm:text-sm font-monterastBold italic mr-auto text-white">
          <Logo height={50} />
          <div
            className={`w-8 h-8 close-btn ${
              opened
                ? "before:rotate-45 before:top-1/2 after:top-1/2 after:-rotate-45"
                : ""
            }`}
            onClick={() => setOpened(!opened)}
          >
            <div
              className={`w-1/2 h-1 ${opened ? "" : " bg-white"} rounded`}
            ></div>
          </div>
        </div>
        <div className={`list max-sm:pt-2 max-sm:pb-4`}>
          {items.map((item, index) => {
            return (
              <a
                onClick={() => {
                  props.scrollTo(item.id);
                }}
                className={`link`}
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
        </div>
      </ul>
    </div>
  );
};

export default Sidenav;
