import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// import MoonIcon from "../Icons/MoonIcon.jsx";
// import SunIcon from "../Icons/SunIcon.jsx";
import { useTheme } from "next-themes";
import Profile from "./Profile.jsx";
import NETFLIXLOGO from "../../assets/NGPT LOGOS.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Headers() {
  // const { resolvedTheme, theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styleCard = {
    fontFamily: "Poppins",
    backgroundColor: "transparent", // Set to transparent
    fontSize: "16px",
  };

  return (
    <>
      <header
        className="bg-transparent font-Poppins font-sans h-[80px] shadow-[0_0px_20px_30px_-10px_rgb(38, 57, 77)] w-full"
        style={styleCard}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between py-[4.5px] px-[8.5px] lg:px-8 font-sans text-red-500 w-full"
          aria-label="Global"
          style={styleCard}
        >
          <div className="flex lg:flex-1 relative" style={styleCard}>
            <Link className="-m-1.5 p-1.5" to="/">
              <span className="sr-only text-red-500"></span>
              <img
                className="w-auto h-40 absolute top-[-74px] left-0"
                src={NETFLIXLOGO}
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden" style={styleCard}>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group
            className="hidden lg:flex lg:gap-x-12"
            style={styleCard}
          >
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white font-sans hover:text-red-600 transition ease-in-out delay-100"
                style={styleCard}
              >
                <Link to="/">Home</Link>
              </Popover.Button>
            </Popover>
            {/*
                <Link
              to="/"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer"
              style={styleCard}
            >
              <i className="fa-solid fa-magnifying-glass px-2"></i>
              Search
            </Link>
               */}

            <Link
              to="/TvShows"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer"
              style={styleCard}
            >
              TV Shows
            </Link>
            <Link
              to="/Movies"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in delay-100 cursor-pointer"
              style={styleCard}
            >
              Movies
            </Link>
            <Link
              to="/Wishlist"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in delay-100 cursor-pointer"
              style={styleCard}
            >
              My Wishlist
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer"
              style={styleCard}
            >
              <i className="fa-solid fa-magnifying-glass px-2"></i>
              Search
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Profile />

            {/*
             
            <button
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
              }}
              type="button"
              className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            */}
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-14 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Zomato_Logo.png/1200px-Zomato_Logo.png?20201120190035"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                          Product
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Search
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Offers
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Help
                  </a>
                </div>

                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
