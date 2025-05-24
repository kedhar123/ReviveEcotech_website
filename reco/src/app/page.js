import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="rounded-2xl bg-gray-200 min-h-screen m-10 p-8">
        <h1 className="text-center font-bold text-[#A7CB4F] text-6xl mb-8">
          Contact Us
        </h1>
        <div className="rounded-2xl bg-[#D9D9D9] p-8 m-10 min-h-screen">
          <p className="text-center text-3xl text-black font-light italic mb-6">
            Call us between 8AM to 7PM
          </p>
          <div className="flex">
            <div className="w-1/2 relative">
              <Image
                src="/img.png"
                alt="Recycling Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
                priority
              />
            </div>
            <div className="w-1/2 p-6 space-y-4">
              <div className="bg-[#A7CB4F] py-2.5 rounded-2xl text-center">
                <p className="text-2xl text-black">revive_help@gmail.com</p>
              </div>
              <div className="bg-[#A7CB4F] py-2.5 rounded-2xl text-center">
                <p className="text-2xl text-black">
                  Contact no: +91 9102949593
                </p>
              </div>
              <form>
                <div className="py-2.5 rounded-2xl">
                  <label htmlFor="email" className="text-2xl text-black py-7">
                    Email id:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="your email@example.com"
                    className="w-full px-3 py-2 outline-black bg-white text-2xl text-gray-600"
                    id="email"
                  />
                </div>
                <div className="py-2.5 rounded-2xl">
                  <label
                    htmlFor="password"
                    className="text-2xl text-black py-7"
                  >
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 outline-black bg-white text-2xl text-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="block mx-auto px-4 py-2.5 rounded-2xl outline-black bg-[#A7CB4F] text-2xl text-black font-medium cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
