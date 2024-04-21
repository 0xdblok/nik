import React from "react";

export default function Tokenomics() {
  return (
    <section className="p-6  dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto ">
        <h2 className="text-6xl font-bold text-center text-[#2055A4]">
          TOKENOMICS
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#2055A4] text-gray-50">
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
            </div>
            <p className="text-2xl font-semibold">TOTAL SUPPLY : 1B</p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#2055A4] text-gray-50">
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
            </div>
            <p className="text-2xl font-semibold">100% LP</p>
          </div>
          <div className="flex t  flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#2055A4] text-gray-50">
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
            </div>
            <p className="text-2xl font-semibold">NO PRESALE</p>
            <p className="text-2xl font-semibold"> LP LOCKED</p>
          </div>
        </div>
      </div>
      <h2 className="md:text-2xl mx-auto container text-sm font-bold text-center dark:text-gray-900">
        CA : 0x34526352695e42D658ddDab65D9cE8B8E18a75d4
      </h2>
    </section>
  );
}
