import React from "react";
import tokenomics from "../asset/tokenomics.png";
import Image from "next/image";
export default function Tokenomics() {
  return (
    <div className="pt-36 ">
      <div className="mx-16 lg:mx-48 xl:mx-66  border-4 border-black  rounded-lg ">
        <h1 className="bunge text-center  text-4xl xl:text-5xl">Tokenomics</h1>
      </div>
      <div className="lg:flex justify-center gap-4 w-full pt-8 ">
        <div className="lg:w-1/2">
          {" "}
          <Image
            className=""
            src={tokenomics}
            alt="Nikula Tisla"
            width={550}
            height={550}
          />{" "}
        </div>
        <div className="lg:w-1/2 flex items-center border-4 border-black rounded-lg mt-6 lg:mt-0">
          {" "}
          <div className="w-full">
            <h1 className="bunge text-center  text-xl xl:text-2xl">
              TOTAL SUPPLY
            </h1>
            <p className="text-center bunge">1.000.000.000 </p>
            <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">LP</h1>
            <p className="text-center bunge">80% </p>
            <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">
              COMMUNITY
            </h1>
            <p className="text-center bunge">15% </p>

            <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">DEV</h1>
            <p className="text-center bunge">5% </p>
          </div>
        </div>
      </div>
    </div>
  );
}
