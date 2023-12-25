import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      {burgerOpen && (
        <div className="fixed flex justify-around items-center bg-darkPink opacity-75 w-full h-full z-50">
          <button className="absolute top-0 right-0 pb-3 pl-4 pr-4 m-2">
            <span
              className="text-4xl text-grayishRed"
              onClick={() => {
                setBurgerOpen(false);
              }}
            >
              x
            </span>
          </button>
          <div className="absolute text-grayishRed font-lanche h-1/2 justify-around items-center flex flex-col">
            <Link
              className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                router.pathname === "/" ? "bg-softOrange text-darkPink" : ""
              }`}
              href="/"
            >
              HOME
            </Link>
            <Link
              className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                router.pathname === "/about"
                  ? "bg-softOrange text-darkPink"
                  : ""
              }`}
              href="/about"
            >
              ABOUT
            </Link>
            <Link
              className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                router.pathname === "/gallery"
                  ? "bg-softOrange text-darkPink"
                  : ""
              }`}
              href="/gallery"
            >
              GALLERY
            </Link>
            <Link
              className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                router.pathname === "/contact"
                  ? "bg-softOrange text-darkPink"
                  : ""
              }`}
              href="/contact"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}

      <nav className="fixed flex w-full justify-between items-center md:hidden mb-3 z-40">
        <div className="absolute w-full h-16">
          <Image
            src="/images/ripped_textures/RectangleBig.png"
            alt="bg"
            layout="fill"
          />
          <div className="absolute w-full h-5 top-14">
            <Image
              src="/images/ripped_textures/Ripped.svg"
              alt="bg"
              layout="fill"
            />
          </div>
        </div>
        <Link className="p-4 mx-2 inline-block z-10" href="/">
          <Image
            src="/images/logo/Logo_Mobile.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>
        <button
          className="p-4 mx-2 z-10"
          onClick={() => {
            setBurgerOpen(true);
          }}
        >
          {!burgerOpen && (
            <Image
              src="/images/icon/Burger.png"
              alt="Burger"
              width={30}
              height={30}
            />
          )}
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className="fixed hidden md:flex justify-between font-argentum-regular items-center text-grayishRed w-full h-20 mb-5 z-40">
        <div className="absolute w-full h-20">
          <Image
            src="/images/ripped_textures/RectangleBig.png"
            alt="bg"
            layout="fill"
          />
          <div className="absolute w-full h-10 top-16">
            <Image
              src="/images/ripped_textures/Ripped.svg"
              alt="bg"
              layout="fill"
            />
          </div>
        </div>
        <div className="w-1/3 flex justify-around z-10">
          <Link
            className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
              router.pathname === "/" ? "bg-softOrange text-darkPink" : ""
            }`}
            href="/"
          >
            HOME
          </Link>
          <Link
            className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
              router.pathname === "/about" ? "bg-softOrange text-darkPink" : ""
            }`}
            href="/about"
          >
            ABOUT
          </Link>
        </div>
        <div className="w-1/3 flex justify-around z-10">
          <h1 className="font-lanche text-4xl">Design By Melz</h1>
        </div>
        <div className="w-1/3 flex justify-around z-10">
          <Link
            className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
              router.pathname === "/gallery"
                ? "bg-softOrange text-darkPink"
                : ""
            }`}
            href="/gallery"
          >
            GALLERY
          </Link>
          <Link
            className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
              router.pathname === "/contact"
                ? "bg-softOrange text-darkPink"
                : ""
            }`}
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
