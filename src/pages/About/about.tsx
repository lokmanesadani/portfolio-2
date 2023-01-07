import Coffee from "../../components/coffee";
import Anime from "../../components/anime";
import Music from "../../components/music";
import Cinema from "../../components/cinema";
import Joystick from "../../components/joystick";
interface Intrest {
  icon: any;
  name: string;
}
interface Info {
  title: string;
  value: string;
}
const About = () => {
  const Intrests: Intrest[] = [
    { icon: Coffee, name: "Coffee" },
    { icon: Anime, name: "Anime" },
    { icon: Music, name: "Music" },
    { icon: Cinema, name: "Movies" },
    { icon: Joystick, name: "Games" },
  ];
  const Infos: Info[] = [
    { title: "Email", value: "hl_sadani@esi.dz" },
    { title: "Phone", value: "+213 792 796 423" },
    { title: "Address", value: "Algiers, Algeria" },
  ];

  return (
    <div className="max-w-7xl w-full  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold text-4xl pb-16 pt-6">
        About me
      </span>
      <div className="w-full backdrop-blur-sm rounded-2xl flex flex-col h-full justify-evenly">
        <div className="flex flex-col md:flex-row gap-12 max-md:items-center">
          <img
            className=" sm:w-96 md:w-80 w-4/6 shrink-0 object-cover border-[6px] m-0"
            src="/Signature.jpg"
            alt=""
          />

          <div className=" text-justify text-white text-lg leading-10">
            <div className="text-2xl text-left font-monterastSemiBold pb-5">
              SADANI lokmane abdelaziz &nbsp;
              <span className=" text-white inline-block font-monterastBold rounded-xl bg-text px-4 py-2">
                MERN Stack developer
              </span>
            </div>
            My name is{" "}
            <span className=" text-icon">SADANI Lokmane Abdelaziz</span>, i'm a
            recent graduate of ESI (Highest School of Computer Science) in
            Algiers and a fullstack web, I'm very passionate and dedicated and i
            have acquired the skills necessary to build great websites and web
            applications. Don't hesitate to contact me !
          </div>
        </div>
        <div className="flex flex-col pt-10 sm:flex-row gap-12 max-sm:items-center">
          <div className="w-full">
            <span className=" text-white text-2xl font-monterastSemiBold">
              Personel information
            </span>
            {Infos.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row sm:flex-row gap-12 pt-4"
                >
                  <span className="text-icon text-xl font-monterast">
                    {info.title}
                  </span>
                  <span className="text-white text-xl">{info.value}</span>
                </div>
              );
            })}
          </div>

          <div className=" text-justify w-full text-white ">
            <span className=" text-2xl font-monterastSemiBold">Intrests</span>
            <div className="flex flex-wrap gap-4 py-4">
              {Intrests.map((intrest, index) => {
                return (
                  <div
                    key={index}
                    className="flex rounded-xl items-center justify-center p-4 aspect-square h-28 bg-slate-500 flex-col gap-2"
                  >
                    <div className="h-12">
                      <intrest.icon />
                    </div>
                    <span>{intrest.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;