import React from "react";
import Image from "next/image";

import tele from "../asset/tele.svg";
import xx from "../asset/xx.svg";

export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="flex gap-2 pt-10 justify-end pb-4 pr-6">
        <a href="https://x.com/aabrahambase">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={xx}
            alt="x"
            width={30}
            height={30}
          />
        </a>
        <a href="https://x.com/aabrahambase">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={tele}
            alt="telegram"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
