import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="min-h-screen p-8 m-10 bg-gray-100 rounded-2xl">
        <h1 className="text-center font-bold text-5xl mb-8">
          <span className="font-bold text-black">Download</span>
          <span className="text-[#A7CB4F]">Our App</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-16 px-8 md:px-16">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/image.png"
              alt="QR Code to download app"
              width={192}
              height={192}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1">
            <p className="text-3xl text-black font-bold mb-3">
              Everything You Need in One Place
            </p>
            <p className="text-lg mb-4 text-black">
              Our mobile app makes recycling effortless and rewarding. With just
              a few taps, you can:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-1 text-black">
              <li>Schedule waste pickup at your convenience</li>
              <li>Track your recycling history and impact</li>
              <li>Redeem rewards and referral bonuses</li>
              <li>Get real-time updates on collection status</li>
              <li>Learn about proper waste segregation</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://apps.apple.com/your-app-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img2.png"
                  alt="Download on the App Store"
                  width={150}
                  height={45}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/your-app-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img3.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-black text-center mt-10 py-4 text-2xl">
          Subscribe to get updates on our initiatives and recycling tips.
        </p>
        <div>
          <div className="bg-[#A7CB4F] py-2.5 rounded-full text-center mx-15">
            <Link href="/">
              <p className="text-2xl text-black ">Enter Your Email</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-[#A7CB4F] py-2.5 rounded-full text-center mt-5 mx-15">
            <Link href="/">
              <p className="text-2xl text-black ">Share Your Response</p>
            </Link>
          </div>
        </div>
        <footer className="text-black text-center p-4 m-3 text-2xl">
          © 2025 Revives. All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default Footer;
