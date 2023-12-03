import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [dataForm, setDataForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  // gérer le changement des input
  const handleChange = (e) => {
    setDataForm(() => ({
      ...dataForm,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = () => {
    //test si les input sont empty
    if (
      dataForm.username !== "" &&
      dataForm.email !== "" &&
      dataForm.password !== ""
    ) {
      navigate("/")
      alert("signUp successfully");
    } else {
      alert("mail or pwd is empty");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 max-w-md p-6 bg-white border  rounded-lg shadow">
          <h2 className="mb-2 text-2xl font-semibold">Sign Up</h2>
          <div className="mb-2">
            <label className="mb-1 text-sm font-medium text-gray-900">
              name:
            </label>
            <input
              class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
              placeholder="your name"
              name="name"
              type="text"
              value={dataForm.name}
              onChange={(e) => handleChange(e)}
              required={true}
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-sm font-medium text-gray-900">
              Username:
            </label>
            <input
              class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
              placeholder="username or mail address"
              name="username"
              type="text"
              value={dataForm.username}
              onChange={(e) => handleChange(e)}
              required={true}
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-sm font-medium text-gray-900">
              Email:
            </label>
            <input
              class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
              placeholder="mail address"
              name="email"
              type="text"
              value={dataForm.email}
              onChange={(e) => handleChange(e)}
              required={true}
            />
          </div>
          <div className=" mb-2">
            <label className=" mb-1  text-sm font-medium text-gray-900">
              Password:
            </label>
            <input
              class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
              placeholder="password"
              name="password"
              type="text"
              value={dataForm.password}
              onChange={(e) => handleChange(e)}
              required={true}
            />
          </div>
          <div className="flex justify-between item-center my-2">
            <p>
              {" "}
              I have an account?{" "}
              <span className="ml-1 font-bold text-sm text-blue-gray ">
                <Link to={'/'}>
                  Sign IN
                </Link>
                
              </span>
            </p>
            <button
              onClick={handlesubmit}
              className=" text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
