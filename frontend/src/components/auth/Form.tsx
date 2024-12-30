import React from "react";
import { Input } from "../Input";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

interface inputType {
  email: string;
  password: string;
  name?: string;
  accountType?: string;
}

interface FormProps {
  type: "signin" | "signup";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: inputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Form = ({ type, onSubmit, input, onChange }: FormProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center p-20 bg-black">
      <div className="p-8 border border-gray-700 rounded-lg bg-[#262626] w-[27rem] shadow-lg">
        {/* Navigation Tabs */}
        <div className="flex text-gray-400 mb-5 justify-evenly border-b border-gray-700 pb-2">
          <div
            role="button"
            className={`px-2 pb-3 cursor-pointer ${
              type === "signin"
                ? "border-b-2 border-blue-600 text-gray-300"
                : ""
            }`}
            onClick={() => navigate("/signin")}
          >
            Login
          </div>
          <div
            role="button"
            className={`px-2 pb-3 cursor-pointer ${
              type === "signup"
                ? "border-b-2 border-blue-600 text-gray-300"
                : ""
            }`}
            onClick={() => navigate("/signup")}
          >
            Register
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl font-bold text-center">
          {type === "signin" ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-gray-400 text-sm mt-1 text-center">
          {type === "signin"
            ? "Sign in to your account"
            : "Join SmartGig to explore opportunities"}
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={onSubmit}>
          {type === "signup" && (
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={onChange}
                classname="bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full text-gray-300"
              />
            </div>
          )}

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={onChange}
              classname="bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full text-gray-300"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={onChange}
              classname="bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full text-gray-300"
            />
          </div>

          {type === "signup" && (
            <div className="mb-5">
              <label htmlFor="accountType" className="block text-gray-400 mb-2">
                Account Type
              </label>
              <select
                id="accountType"
                className="bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full rounded-lg px-3 py-2 text-gray-300"
                value={input.accountType}
                onChange={onChange}
                name="accountType"
              >
                <option value="student" selected>Select Account Type</option>
                <option value="freelancer">Freelancer</option>
                <option value="client">Client</option>
              </select>
            </div>
          )}

          {type === "signin" && (
            <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-[#404040]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            text={type === "signin" ? "Sign In" : "Sign Up"}
            className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
