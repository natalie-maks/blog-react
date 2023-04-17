import React from "react";
import Image from "next/image";
import Link from "next/link";
import insta from "@/public/insta-icon.svg";
import twitter from "@/public/twitter-icon.svg";
import facebook from "@/public/facebook-icon.svg";
import youtube from "@/public/youtube-icon.svg";
import pinterest from "@/public/pinterest-icon.svg";

const SocialMedia = () => {
  return (
    <section className="mt-12">
      <h3 className="border-black border-2 text-center font-semibold my-2 p-2 bg-yellow-300">
        SOCIAL LINKS
      </h3>
      <ul className="flex justify-between mt-6">
        <li className="mb-1 w-14 h-14 p-3 border-2 border-black hover:bg-yellow-200 transition-all">
          <Link href="/">
            <Image src={insta} />
          </Link>
        </li>
        <li className="mb-1 w-14 h-14 p-3 border-2 border-black hover:bg-yellow-200 transition-all">
          <Link href="/">
            <Image src={twitter} />
          </Link>
        </li>
        <li className="mb-1 w-14 h-14 p-3 border-2 border-black hover:bg-yellow-200 transition-all">
          <Link href="/">
            <Image src={facebook} />
          </Link>
        </li>
        <li className="mb-1 w-14 h-14 p-3 border-2 border-black hover:bg-yellow-200 transition-all">
          <Link href="/">
            <Image src={youtube} />
          </Link>
        </li>
        <li className="w-14 h-14 p-3 border-2 border-black hover:bg-yellow-200 transition-all">
          <Link href="/">
            <Image src={pinterest} />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SocialMedia;
