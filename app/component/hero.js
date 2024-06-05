import React from "react";
import nikula from "../asset/nikula.png";
import niku from "../asset/niku.png";
import nikuula from "../asset/nikuula.png";
import buynow from "../asset/buynow.png";
import hi from "../asset/hi.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center  md:px-8">
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image
          className="mx-auto sm:w-10/12 lg:w-2/3 "
          src={nikula}
          alt="Nikula Tisla"
          width={450}
          height={450}
        />{" "}
      </div>{" "}
      <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
        <h1 className="bunge text-center  text-4xl xl:text-5xl">
          Ni<span className="text-[#2055A4]">ku</span>la{" "}
          <span className="text-[#2055A4]">Tes</span>la
        </h1>
        <p className="bunge md:px-48 text-center text-lg font-medium leading-relaxed sm:mx-auto lg:ml-0">
          I, Nikula Tesla, the ultimate giga-brain with a love for zappy stuff,
          chill on planet Earth. ONE OF THE CHOSEN IS ME. I totally blew minds
          with my alternating current (AC) wizardry and dreamed up wireless
          energy before it was cool.
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <a href="" className="">
          {" "}
          <Image
            className="sm:w-[30px] sm:h-[30px] md:w-[46px] md:h-[56px] "
            src={buynow}
            alt="Nikula Tisla"
            width={100}
            height={100}
          />
        </a>
      </div>
    </section>
  );
}
