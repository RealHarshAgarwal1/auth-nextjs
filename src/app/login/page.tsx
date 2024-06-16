"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

function LoginPage() {
  const [user,setUser] = React.useState({
    email:"",
    password:"",
  });

  const onLogin = async (e) => {
    e.preventDefault();
  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input className="p-2 border-2 border-gray-300 rounded-md mb-4 focus-outline-none focus:border-slate-500"
        type="email"
        id="email"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input className="p-2 border-2 border-gray-300 rounded-md mb-4 focus-outline-none focus:border-slate-500"
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 focus:border-gray-500"
        onClick={onLogin}
      >
        Login
      </button>
      <p>Don't have an account?</p><Link href="/signup">Signup</Link>

    </div>
  )
}

export default LoginPage
