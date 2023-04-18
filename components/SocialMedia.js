import React from "react";
import Image from "next/image";
import insta from "@/public/insta-icon.svg";
import twitter from "@/public/twitter-icon.svg";
import facebook from "@/public/facebook-icon.svg";
import youtube from "@/public/youtube-icon.svg";
import pinterest from "@/public/pinterest-icon.svg";

const SocialMedia = () => {
  return (
    <section className="mt-12 w-full sm:w-1/2 lg:w-full">
      <h3 className="border-zinc-900 border-2 text-center font-semibold mb-2 p-2 bg-yellow-300">
        SOCIAL LINKS
      </h3>
      <ul className="flex justify-between mt-6">
        <li className="mb-1 w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 p-3 border-2 border-zinc-900 hover:bg-yellow-200 transition-all">
          <a href="https://www.instagram.com/" target="_blank">
            <Image src={insta} />
          </a>
        </li>
        <li className="mb-1 w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 p-3 border-2 border-zinc-900 hover:bg-yellow-200 transition-all">
          <a href="https://twitter.com/?lang=en/" target="_blank">
            <Image src={twitter} />
          </a>
        </li>
        <li className="mb-1 w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 p-3 border-2 border-zinc-900 hover:bg-yellow-200 transition-all">
          <a href="https://www.facebook.com/" target="_blank">
            <Image src={facebook} />
          </a>
        </li>
        <li className="mb-1 w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 p-3 border-2 border-zinc-900 hover:bg-yellow-200 transition-all">
          <a href="https://www.youtube.com/" target="_blank">
            <Image src={youtube} />
          </a>
        </li>
        <li className="w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 p-3 border-2 border-zinc-900 hover:bg-yellow-200 transition-all">
          <a href="https://www.pinterest.com/" target="_blank">
            <Image src={pinterest} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialMedia;
