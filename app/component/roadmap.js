import React from "react";
import logo from "../asset/logo.png";
import america from "../asset/america.png";
import Image from "next/image";
import roadmap from "./roadmap";
export default function Roadmap() {
  return (
    <section className="bg-gray-100 :text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl pt-6 md:pt-24 font-bold tracking-tight text-center sm:text-5xl text-gray-900">
            ROADMAP
          </h2>
        </div>
        <div className="md:grid pt-6 lg:gap-8 = md:items-center  md:justify-center">
          <div className="flex justify-center ">
            <div className=":pt-12 p-6 bg-gray-200  space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md  text-gray-800">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7">
                          {" "}
                          1
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Phase 1
                  </h4>
                  <p className="mt-2 text-gray-600">
                    • Fair Launch Strategy: Implement a fair launch with no
                    pre-sale to avoid price manipulation and ensure equality.
                  </p>
                  <p className="mt-2 text-gray-600">
                    • Liquidity Pool: Lock initial liquidity on a decentralized
                    exchange like Uniswap for a set period to build investor
                    confidence.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Phase 2
                  </h4>
                  <p className="mt-2 text-gray-600">
                    • FLaunch an aggressive marketing campaign across social
                    media, influencers, and PR releases to generate buzz and
                    attract initial buyers.
                  </p>
                  <p className="mt-2 text-gray-600">
                    • Introduce holder rewards such as redistribution of
                    transaction fees, which encourages holding and reduces sell
                    pressure.
                  </p>
                  <p className="mt-2 text-gray-600">
                    • Partnerships: Form strategic partnerships with other
                    crypto projects and platforms to increase utility and
                    visibility.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Phase 3{" "}
                  </h4>
                  <p className="mt-2 text-gray-600">
                    • New Features: Continuously update the coin's features and
                    platform based on community feedback and technological
                    advancements.
                  </p>
                  <p className="mt-2 text-gray-600">• TBA</p>
                  <p className="mt-2 text-gray-600">• TBA</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0 md:h-full"></div>
        </div>
      </div>
    </section>
  );
}
