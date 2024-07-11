import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/lib/config/site";
import { Button, ButtonGroup } from "@nextui-org/button";
import { GithubIcon } from "@/lib/svg/icons";
import HeroVideo from "@/components/HeroVideo";
import MySong from "@/components/MySong";

export default function Home() {
  const parts = ["work", "overview", "music"];
  return (
    <>
      <HeroVideo />
      <section className="h-full  w-full max-h-screen relative flex flex-col items-center justify-between">
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="flex mx-auto justify-between flex-col md:flex-row md:flex-nowrap md:justify-center flex-1 gap-3 items-center w-full">
            <div className="heading p-2 md:p-2 lg:p-2">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Peter</span>
              </h1>
              <h2 className="text-xs sm:text-sm py-2 md:text-md font-semibold text-start">
                Software Engineer &nbsp; <b style={{ fontSize: "2rem" }}>.</b>
                &nbsp; Web Developer&nbsp;<b style={{ fontSize: "2rem" }}>.</b>
                &nbsp; Data Scientist
              </h2>
              <div className="flex flex-row items-center gap-5 py-2">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                  style={{ padding: "0.5rem 1rem" }}
                  href={""}
                >
                  My Blogs
                </Link>
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                  })}
                  style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={25} />
                  GitHub
                </Link>
              </div>
            </div>
            <div className="container mx-auto flex-1 flex items-center justify-center relative">
              <div className="border-opacity-35 dark:border-opacity-30 border-8 border-dashed flex justify-center items-center overflow-hidden border h-72 w-72 md:h-96 md:w-96 border-gray-200 dark:border-gray-800 rounded-full relative">
                <div className="overflow-hidden dark:border-opacity-30 border-opacity-15 border-8 border h-64 w-64 md:h-80 md:w-80 border-gray-200 dark:border-gray-800 rounded-full">
                  <img src="/hero-photo.png" alt="hero photo" className="" />
                </div>
              </div>
            </div>
            <div className="heading p-2">
              <h1 className="text-md md:text-lg font-bold">
                Wondering... How to{" "}
                <span className="text-primary"> Conect </span> with me?
              </h1>
              <h2 className="text-xs text-blue-300 sm:text-sm py-2 md:text-md font-semibold text-start">
                Instagram &nbsp; <b style={{ fontSize: "2rem" }}>.</b>
                &nbsp; Twitter&nbsp;<b style={{ fontSize: "2rem" }}>.</b>
                &nbsp; Whatsapp&nbsp;<b style={{ fontSize: "2rem" }}>.</b>&nbsp;
                Linkedin
              </h2>
              <div className="flex flex-row items-center gap-5 py-2"></div>
            </div>
          </div>
        </div>
        <div className="px-2 py-6  w-full flex flex-row gap-4 items-center justify-center">
          {parts.map((part, i) => (
            <Link key={i} href={`#${part}`}>
              <Button
                variant="flat"
                radius="full"
                size="sm"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                {part}
              </Button>
            </Link>
          ))}
        </div>
      </section>
      <section>
        {/* <MyCard /> */}
        <MySong />
      </section>
    </>
  );
}
