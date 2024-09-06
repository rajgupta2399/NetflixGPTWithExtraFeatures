import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Profile from "./Profile.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import NETFLIXLOGO from "../../assets/NGPT LOGOS.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Headers() {
  // const { resolvedTheme, theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const styleCard = {
    fontFamily: "Poppins",
    backgroundColor: "transparent", // Set to transparent
    fontSize: "16px",
  };

  return (
    <>
      <header
        className="bg-transparent font-Poppins font-sans h-[80px] shadow-[0_0px_20px_30px_-10px_rgb(38, 57, 77)] w-full absolute z-50 "
        style={styleCard}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-[8.5px] lg:px-8 font-sans text-red-500 w-full mt-[-6.5vw] lg:mt-[-2.5vw]"
          aria-label="Global"
          style={styleCard}
        >
          <div className="flex lg:flex-1" style={styleCard}>
            <Link className="-m-1.5 p-1.5" to="/browse">
              <img
                className="w-auto h-36 lg:h-40"
                src={NETFLIXLOGO}
                alt="Netflix Logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden" style={styleCard}>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
                <Link to="/browse">Home</Link>
              </Popover.Button>
            </Popover>

            <Link
              to="/TvShows"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer"
              style={styleCard}
            >
              TV Shows
            </Link>
            <Link
              to="/Wishlist"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in delay-100 cursor-pointer"
              style={styleCard}
            >
              My Wishlist
            </Link>
            <Link
              to="/Search"
              className="text-sm font-semibold leading-6 text-white hover:text-red-600 transition ease-in-out delay-100 cursor-pointer"
              style={styleCard}
            >
              <i className="fa-solid fa-magnifying-glass px-2"></i>
              Search
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end bg-transparent blur-0">
            <Profile />
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10 bg-black" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between mt-[-30px] mb-[-40px]">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-36 w-auto bg-black"
                  src={NETFLIXLOGO}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root bg-black">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50  ">
                          <Link
                            to="/browse"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Home
                          </Link>
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    to="/Search"
                    style={styleCard}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Search
                  </Link>

                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    to="/TvShows"
                    style={styleCard}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tv Shows
                  </Link>

                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    to="/Wishlist"
                    style={styleCard}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Wishlist
                  </Link>
                </div>

                <div className="py-6 flex justify-between">
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    to="/"
                    style={styleCard}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      onClick={() => {
                        handleSignOut;
                      }}
                    >
                      LogOut
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
