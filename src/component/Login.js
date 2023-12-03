import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // state pour capturer le changement des inputs
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate()

  const handleLogin = () => {
    //on verifie si les input sont valide je le déplace vers le dashbord
    if (username === "user" && password === "password") {
      alert("Login successful!");
      navigation("/dashboard/dash")
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 max-w-md p-6 bg-white border  rounded-lg shadow">
        <h2 className="mb-2 text-2xl font-semibold">Sign In</h2>
        <div className="mb-2">
          <label className="mb-1 text-sm font-medium text-gray-900">
            Username:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            placeholder="username or mail address"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required={true}
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 text-sm font-medium text-gray-900">
            Password:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex justify-between item-center my-2">
          <p>
            {" "}
            Don&apos;t have an account?{" "}
            <span className="ml-1 font-bold text-sm text-blue-gray ">
              <Link
                to={'/signup'}
              >
              Sign up
              </Link>
              
            </span>
          </p>
          <button
            onClick={handleLogin}
            className=" text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
