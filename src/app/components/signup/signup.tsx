"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
          <form className="w-[400px] h-[400px] mt-[100px] bg-gray-400 rounded-[10px]  p-[10px]">
            <input
              className="w-full text-black text=[12px] h-[30px] mt-[50px] rounded-[20px] pl-[20px]"
              type="text"
              id="name"
              placeholder="What is your name?"
            />
            <br></br>

            <input
              className="w-full text-black text=[12px] mt-[30px] h-[30px] rounded-[20px] pl-[20px]"
              type="password"
              id="password"
              placeholder="Your password?"
            />
            <div className="item-center justify-center flex mt-[60px]">
              <button className="w-[200px] bg-blue-500 rounded-[10px] h-[30px]">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
