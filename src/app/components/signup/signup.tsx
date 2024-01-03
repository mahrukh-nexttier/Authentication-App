"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reply, setreply] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim().length <= 5) {
      console.log("Invalid Password");
    } else if (email.trim().length === 0) {
      console.log("Email is required");
    } else {
      try {
        const response = await fetch(
          "https://30a8-2407-aa80-314-b88f-e4a9-198e-e08f-9715.ngrok-free.app/api/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          }
        );
        if (response.ok) {
          console.log("form is submitted");
          setreply("User has been registered successfully");
        } else {
          console.log("Login failed");
          setreply("Error while creating User");
        }
      } catch (error) {
        console.error("Error during login", error);
      }
    }
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
          <form
            className="w-[400px] h-[400px] mt-[100px] bg-gray-400 rounded-[10px]  p-[10px]"
            onSubmit={handleSubmit}
          >
            <p className="font-bold text-[20px] text-black text-center">
              Sign Up
            </p>
            <input
              className="w-full text-black text=[12px] h-[30px] mt-[50px] rounded-[20px] pl-[20px]"
              type="text"
              id="name"
              placeholder="What is your name?"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br></br>
            <input
              className="w-full text-black text=[12px] mt-[30px] h-[30px] rounded-[20px] pl-[20px]"
              type="email"
              id="email"
              placeholder="Your email?"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br></br>
            <input
              className="w-full text-black text=[12px] mt-[30px] h-[30px] rounded-[20px] pl-[20px]"
              type="password"
              id="password"
              placeholder="Your password?"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="item-center justify-center flex mt-[60px]">
              <button className="w-[200px] bg-blue-500 rounded-[10px] h-[30px]">
                Signup
              </button>
            </div>
            <p
              className="text-center items-center text-black font-bold mt-[10px]
            "
            >
              {" "}
              {reply}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
