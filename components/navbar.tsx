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
import { siteConfig } from "@/lib/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, Logo, SearchIcon } from "@/lib/svg/icons";

export const Navbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar
      className="flex py-1 border-b-1 dark:border-gray-900"
      height={60}
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
              <Logo />
              <p className="font-bold text-inherit">Alidantech</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 font-bold justify-start ml-2 light:text-gray-800">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink 
                className="hover:outline-2 outline-cyan-500 bg-transparent"
                color="foreground"
                 href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem className="hidden md:flex gap-2">
            <ThemeSwitch />

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
          </NavbarItem>
          {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
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
        {/* {searchInput} */}
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
