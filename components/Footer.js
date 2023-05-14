import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-white.png";

const Footer = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
    e.target.reset();
  };
  return (
    <footer className="bg-zinc-900 text-white pt-4 px-4 mt-20">
      <div className="container lg:w-4/5 mx-auto">
        <Image
          src={logo}
          alt="logo"
          width="100"
          height="50"
          className="h-16 w-28 object-scale-down"
        />
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between mt-8 mb-12">
          <div className="flex md:w-1/2">
            <div className="w-1/2">
              <p className="font-semibold mb-2">CATEGORIES</p>
              <ul>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <Link href="/things-to-do">Things To Do</Link>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <Link href="/food-and-drink">Food&Drink</Link>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <Link href="/attractions">Attractions</Link>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <Link href="/art-and-culture">Art&Culture</Link>
                </li>
                <li className="hover:text-yellow-400 transition-colors">
                  <Link href="/">All</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <p className="font-semibold mb-2">SOCIAL LINKS</p>
              <ul>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <a href="https://www.instagram.com/" target="_blank">
                    Instagram
                  </a>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <a href="https://twitter.com/?lang=en/" target="_blank">
                    Twitter
                  </a>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <a href="https://www.facebook.com/" target="_blank">
                    Facebook
                  </a>
                </li>
                <li className="mb-1 hover:text-yellow-400 transition-colors">
                  <a href="https://www.pinterest.com/" target="_blank">
                    Pinterest
                  </a>
                </li>
                <li className=" hover:text-yellow-400 transition-colors">
                  <a href="https://www.youtube.com/" target="_blank">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="font-semibold mb-2">SIGN UP</p>
            <p>Sign up to our newletter to stay up to date with latest news and publications</p>
            <form
              className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4"
              onSubmit={handleSignUpSubmit}
            >
              <input
                className="border-white border-2 p-2 bg-transparent"
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="off"
                required
              />

              <button className="bg-white text-black py-2 px-4 font-semibold hover:bg-yellow-200">
                SIGN UP
              </button>
            </form>
            {successMessage && (
              <p className="pt-1 font-semibold">You subscribed to our newsletter!</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4 border-t-2 border-white">
        <p>Copyright &copy; 2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
