// import Spline from "@splinetool/react-spline";
import Developer from "../../components/developer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Introduction = () => {
  const RedirectToGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/?to=hl_sadani@esi.dz&fs=1&tf=cm`;

    window.location.href = gmailUrl;
  };
  return (
    <div className="max-w-7xl w-full max-sm:pt-[70px]  pb-10 flex flex-col px-6">
      <div
        className="flex flex-1  flex-col-reverse md:flex-row max-md:flex-1 
      "
      >
        <div className="w-full flex-1 flex flex-col text-white justify-center h-[450px] sm:h-[700px]">
          <div className="mb-5 text-icon font-monterastSemiBold text-xl sm:text-3xl ">
            welcome !
          </div>
          <div className="text-2xl md:text-4xl font-monterastBold mb-5">
            I'm Lokmane Sadani
          </div>
          <div className="font-cairoBold text-xl italic mb-5 text-orange-100">
            a MERN Stack developer from algiers
          </div>
          <div className="mb-14  max-sm:text-sm">
            Transforming your vision into a beautiful, functional reality.
          </div>
          <span
            onClick={RedirectToGmail}
            className="px-6 cursor-pointer py-3 w-fit max-sm:text-base text-lg text-white font-monterast bg-text rounded-md"
          >
            Hire me
          </span>
        </div>
        <div className="flex relative flex-1 items-center  justify-center flex-col">
          {/* <Spline
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 scale-[0.6] sm:scale-75 md:scale-100 lg:scale-[1.1]"
            scene="https://prod.spline.design/tQCKIPfZheceMkAF/scene.splinecode"
          /> */}
          <Developer />
        </div>
      </div>
      <div className="col-span-2 sm:col-start-2 flex-[0.2] text-white flex  justify-evenly text-xl sm:text-3xl items-center">
        <div className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"></div>
        <a>
          <FontAwesomeIcon
            icon={faLinkedin}
            className=" hover:scale-150 transition-all cursor-pointer"
          />
        </a>
        <a>
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:scale-150 transition-all"
          />
        </a>
        <a>
          <FontAwesomeIcon
            className="hover:scale-150 transition-all cursor-pointer"
            icon={faFacebook}
          />
        </a>
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            className=" hover:scale-150 transition-all cursor-pointer"
          />
        </a>
        <div className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Introduction;
