import React from "react";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-8 md:grid-cols-8 gap-3 py-10">
        <Link href="#">
          <Image
            src="/assets/Html.webp"
            width={100}
            height={100}
            className=""
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/CSS.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/bootstrap.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/tailwindcss.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="">
          <Image
            src="/assets/JS.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/react.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/next js.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/assets/node.webp"
            width={100}
            height={100}
            alt="skill-img"
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Skills;
