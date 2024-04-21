import Image from "next/image";
import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";

import Footer from "./component/footer";
import Roadmap from "./component/roadmap";
import hi from "./asset/hi.png";
import usa from "./asset/usa.png";
export default function Home() {
  return (
    <div className=" md:px-24 px-8">
      <Hero />
      <div>
        <div>
          {" "}
          <Image
            className="mx-auto  sm:w-10/12  lg:w-1/3"
            src={hi}
            alt="Nikula Tisla"
            width={200}
            height={200}
          />{" "}
        </div>
      </div>
      <Tokenomics />
      <div>
        <div>
          {" "}
          <Image
            className="mx-auto  sm:w-8/12  lg:w-1/3"
            src={usa}
            alt="Nikula Tisla"
            width={200}
            height={200}
          />{" "}
        </div>
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}
