import Image from "next/image";
import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";
import niku from "./asset/niku.png";
import Footer from "./component/footer";
import Roadmap from "./component/roadmap";
import hi from "./asset/hi.png";
import usa from "./asset/usa.png";
import bg from "./asset/bg.png";
import Inventor from "./component/inventor";
export default function Home() {
  return (
    <div className=" bg-gray-100 md:px-24 px-12">
      <Hero />
      <div className="absolute  top-8 lg:left-60 ">
        <Image
          className="  lg:w-[200px] lg:h-[200px]"
          src={niku}
          alt="Nikula Tisla"
          width={150}
          height={150}
        />{" "}
      </div>{" "}
      <Tokenomics />
      <Inventor />
      <Roadmap />
      <Footer />
    </div>
  );
}
