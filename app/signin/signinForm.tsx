"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

type Props = {};

const SigninForm = (props: Props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Login = () => {
    try {
      signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch {
      console.log("Error while signing In");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Sign In</h1>

        <label htmlFor="" className="mb-2">
          Email
        </label>
        <input
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="text"
          id="email"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="" className="mb-2">
          Password
        </label>
        <input
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="password"
          id="password"
          value={user.password}
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={Login}
          className="p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 "
        >
          Log In Now
        </button>
        <Link
          href="/signup"
          className="text-sm text-center mt-5 text-neutral-600"
        >
          Do Not Have an Account
        </Link>
        <Link href="/" className="text-center mt-2 ">
          Home
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
