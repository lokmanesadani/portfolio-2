import "./sidenav.scss";
import { useEffect, useState } from "react";
import Logo from "./../logo";
import { motion } from "framer-motion";
interface SideNavItem {
  icon: string;
  id: string;
}
const Sidenav = () => {
  const [windowTop, setWindowTop] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [lagOpened, setLangOpened] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setOpened(false);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const items: SideNavItem[] = [
    { icon: "About", id: "about" },
    // { icon: "Experience", id: "experience" },
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
    setWindowTop(window.pageYOffset > 10);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowTop(window.pageYOffset > 10);
    });
  }, [windowTop]);

  return (
    <div
      className={`sidenav z-40 transition-all
      ${windowTop ? "shadow-lg" : ""} ${
        opened
          ? windowTop
            ? "sm:h-[80px] h-[340px]"
            : "sm:h-[100px] h-[360px]"
          : windowTop
          ? "h-[80px]"
          : "h-[100px]"
      } 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <ul>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            setLangOpened(false);
          }}
          className={`text-3xl ${
            windowTop ? "max-h-[80px]" : "max-h-[100px]"
          }   h-full items-center justify-between flex flex-row grow max-sm:w-full shrink-0 sm:text-sm font-monterastBold italic mr-auto text-white`}
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
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`link  cursor-pointer `}
                key={index}
                href={`#${item.id}`}
              >
                {item.icon}
              </motion.a>
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
