import Coffee from "./../coffee";
import Anime from "./../anime";
import Music from "./../music";
import Cinema from "./../cinema";
import Joystick from "./../joystick";
interface Intrest {
  icon: any;
  name: string;
}
const About = () => {
  const Intrests: Intrest[] = [
    { icon: Coffee, name: "Coffee" },
    { icon: Anime, name: "Anime" },
    { icon: Music, name: "Music" },
    { icon: Cinema, name: "Movies" },
    { icon: Joystick, name: "Games" },
  ];

  return (
    <div className="max-w-6xl w-full  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold text-4xl pb-16 pt-6">
        About me
      </span>
      <div className="w-full backdrop-blur-sm rounded-2xl flex flex-col h-full">
        <div className="flex flex-col sm:flex-row gap-12 max-sm:items-center">
          <img
            className=" sm:w-56 md:w-80 w-4/5 border-[6px] m-0"
            src="/src/assets/Signature.jpg"
            alt=""
          />
          <div className=" text-justify text-white ">
            &nbsp; &nbsp; &nbsp; My name is{" "}
            <span className=" text-icon">SADANI Lokmane Abdelaziz</span> , i'm a
            recent graduate of ESI (Highest School of Computer Science) in
            Algiers and a fullstack web, I'm very passionate and dedicated and i
            have acquired the skills necessary to build great websites and web
            applications. Don't hesitate to contact me !
          </div>
        </div>
        <div className="flex flex-col pt-10 sm:flex-row gap-12 max-sm:items-center">
          <div className="w-full">
            <span className=" text-white text-2xl font-monterast">
              Personel informations
            </span>
            <div className="pb-4"></div>
          </div>

          <div className=" text-justify w-full text-white ">
            <span className=" text-2xl font-monterast">Intrests</span>
            <div className="flex flex-wrap gap-4 pt-4">
              {Intrests.map((intrest, index) => {
                return (
                  <div className="flex rounded-xl items-center justify-center p-4 aspect-square h-28 bg-slate-500 flex-col gap-2">
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
