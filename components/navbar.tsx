"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon } from "@/lib/svg/icons";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <NextUINavbar
      className="flex py-4"
      height={65}
      maxWidth="xl"
      position="sticky"
    >
      <div className="self-center w-full flex justify-around items-center">
        <NavbarContent className="" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <img
                alt="Logo"
                className="h-10 w-10 rounded-full bg-gray-200 border-2 border-gray-400 bg-cover bg-center"
                src="/me.webp"
              />
              <span className="flex flex-col">
                <b className="text-primary-500 text-xs ">
                  {siteConfig.userName}
                </b>
                <span
                  className="text-xs font-lighter text-gray-800 dark:text-gray-400
                "
                >
                  {siteConfig.title}
                </span>
              </span>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex" justify="end">
          <ul className="hidden lg:flex gap-5 pr-8 font-bold justify-start ml-2 light:text-gray-800">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={`relative ${
                    isActive(item.href) ? "active text-primary-500 " : ""
                  } underline-on-active`}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
          <NavbarItem className="hidden md:flex gap-2">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="px-2 py-4 border-t-1  h-full flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
