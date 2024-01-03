"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContext } from "react";
export default function Login() {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isloggedin, setloggedin] = useState(false);
  let [reply, setreply] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim().length <= 5) {
      console.log("Invalid Password");
      return;
    } else if (email.trim().length === 0) {
      console.log("Email is required");
      return;
    } else {
      try {
        const response = await fetch(
          "https://30a8-2407-aa80-314-b88f-e4a9-198e-e08f-9715.ngrok-free.app/api/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );
        if (response.ok) {
          console.log("form is submitted");
          setreply("Login successful");
          setloggedin(true);
        } else {
          console.log("Login failed");
          setreply("Login failed");
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
            className="w-[400px] h-[400px] mt-[100px] bg-gray-400 rounded-[10px] p-[10px]"
            onSubmit={handleSubmit}
          >
            <p className="font-bold text-[20px] text-black text-center">
              Log In
            </p>
            <input
              value={email}
              className="w-full text-black text=[12px] h-[30px] mt-[50px] rounded-[20px] pl-[20px]"
              type="email"
              id="email"
              placeholder="What is your name?"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br></br>

            <input
              value={password}
              className="w-full text-black text=[12px] mt-[30px] h-[30px] rounded-[20px] pl-[20px]"
              type="password"
              id="password"
              placeholder="Your password?"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="item-center justify-center flex mt-[60px]">
              <button
                type="submit"
                className="w-[200px] bg-blue-500 rounded-[10px] h-[30px]"
              >
                Login
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
