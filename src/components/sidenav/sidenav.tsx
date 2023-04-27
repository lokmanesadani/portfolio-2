import "./sidenav.scss";
import { useEffect, useState } from "react";
import Logo from "./../logo";
import { motion } from "framer-motion";
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
  const [lagOpened, setLangOpened] = useState<boolean>(false);
  const items: SideNavItem[] = [
    { icon: "Home", id: "intro" },
    { icon: "About", id: "about" },
    { icon: "Projects", id: "projects" },
    { icon: "Contact", id: "contact" },
  ];
  const downloadCV = (lang: string) => {
    fetch(`/src/assets/CV-${lang}-SADANI.pdf`)
      .then((res) => res.blob())
      .then((blob) => {
        const file = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = file;
        link.download = `CV-${lang}-SADANI.pdf`;
        link.click();
      });
  };
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
      className={`sidenav z-40 transition-all overflow-hidden ${
        opened ? "max-sm:h-[400px] " : "h-[80px]"
      } ${windowTop ? " bg-slate-900 " : " bg-backgound "}`}
    >
      <ul>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            setLangOpened(false);
          }}
          className="text-3xl  max-h-[80px] h-[80px] items-center justify-between flex flex-row grow max-sm:w-full shrink-0 sm:text-sm font-monterastBold italic mr-auto text-white"
        >
          <Logo height={50} />
          <div
            className={`w-8 h-8 close-btn ${
              opened
                ? "before:rotate-45 before:top-1/2 after:top-1/2 after:-rotate-45"
                : ""
            }`}
            onClick={() => {
              setOpened(!opened);
              if (opened) {
                setLangOpened(false);
              }
            }}
          >
            <div
              className={`w-1/2 h-1 ${opened ? "" : " bg-white"} rounded`}
            ></div>
          </div>
        </motion.div>
        <div className={`list p-0 max-sm:pt-2 max-sm:pb-4`}>
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => {
                  props.scrollTo(item.id);
                }}
                className={`link  cursor-pointer `}
                key={index}
              >
                {item.icon}
                <span
                  className={`active ${
                    selectedLink === item.id ? " w-full" : "hover"
                  }`}
                ></span>
              </motion.div>
            );
          })}
          <div className="relative ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="download relative z-40 cursor-pointer"
              onClick={() => {
                setLangOpened(!lagOpened);
              }}
            >
              Download CV
            </motion.div>
            <div
              className={`lang absolute  max-sm:-translate-y-full rounded overflow-hidden left-[calc(100%+1px)] top-full sm:left-0 z-50 w-10/12 bg-white ${
                lagOpened ? "visible" : "invisible"
              }`}
            >
              <div
                onClick={() => downloadCV("FR")}
                className=" cursor-pointer px-4 py-3 text-slate-900 border-b-2 border-slate-300 hover:bg-slate-100"
              >
                French
              </div>
              <div
                onClick={() => downloadCV("EN")}
                className=" cursor-pointer px-4 py-3 text-slate-900  hover:bg-slate-100"
              >
                English
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidenav;
