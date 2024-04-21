import React from "react";
import logo from "../asset/logo.png";
import america from "../asset/america.png";
import hi from "../asset/hi.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center  md:px-8">
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image
          className="mx-auto sm:w-10/12  lg:w-1/3"
          src={logo}
          alt="Nikula Tisla"
          width={450}
          height={450}
        />{" "}
      </div>{" "}
      <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
        <h1 className="text-center  font-bold text-4xl xl:text-5xl">
          Abr<span className="text-[#2055A4]">ah</span>am{" "}
          <span className="text-[#2055A4]">Lin</span>coln
        </h1>
        <p className=" md:px-48 text-center text-lg font-medium leading-relaxed sm:mx-auto lg:ml-0">
          Four score and seven blockchains ago, I would've hodled my top hats,
          but now I'm all in on 'Lin-Coin' – the only currency that's worth a
          theatre visit. Gettysburg address? More like Get-rich-burg address!
        </p>
      </div>
    </section>
  );
}
