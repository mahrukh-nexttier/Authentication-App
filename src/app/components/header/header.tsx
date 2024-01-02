"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header
        className={`flex justify-between items-center p-5 bg-transparent  w-full z-[1] h-[100px]`}
      >
        <Link
          href="/home"
          className={`text-white  font-bold text-[1rem] ${
            pathname === "/home" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/login"
          className={`text-white  font-bold text-[1rem] ${
            pathname === "/login" ? "underline" : ""
          }`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={`text-white  font-bold text-[1rem] ${
            pathname === "/signup" ? "underline" : ""
          }`}
        >
          Sign Up
        </Link>
      </header>
    </>
  );
}
