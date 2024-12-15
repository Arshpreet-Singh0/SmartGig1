import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../button/Button";
import { Check } from "lucide-react";

interface inputType {
  email: string;
  password: string;
  name? : string,
}
interface formProps {
  type: "signin" | "signup";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: inputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = ({ type, onSubmit, input, onChange }: formProps) => {
  return (
    <div className="flex justify-center items-center pt-10 dark:bg-black">
      <div className="flex w-[880px] h-[645px] shadow rounded-xl dark:shadow-white">
        <div
          className="w-1/2 bg-contain rounded-l-xl p-10 pt-16 hidden md:block"
          style={{ backgroundImage: "url(/src/assets/auth.png)" }}
        >
          <div>
            <h1 className="text-3xl text-center text-white">
              Success starts here
            </h1>
            <h3 className="flex ml-9 mt-5 text-white">
              <Check />
              &nbsp;&nbsp; Over 700 categories
            </h3>
            <h3 className="flex ml-9 mt-3 text-white">
              <Check />
              &nbsp;&nbsp; Quality work done faster
            </h3>
          </div>
        </div>
        <div className="flex-1 pt-6 pb-8 mt-5">
          <div className="h-[333px] px-10 py-5">
            <h4 className="text-2xl text-[#222325] mb-2">
              Sign in to your account
            </h4>
            <p className="text-sm opacity-75">
              {type === "signup" ? (
                <p>
                  Already have an account?
                  <Link to={"/signin"} className="underline ml-2">
                    Login here
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account?
                  <Link to={"/signup"} className="underline ml-2">
                    Join here
                  </Link>
                </p>
              )}
            </p>
            <div className="mt-10">
              <form onSubmit={onSubmit}>
                {
                  type==="signup" &&  (
                    <div>
                  <label className="text-sm font-medium text-gray-700 m-2">
                    Name
                  </label>
                  <Input
                    placeholder="Name"
                    type="text"
                    classname="w-full"
                    name="name"
                    value={input.name || ""}
                    onChange={e=>onChange(e)}
                  />
                </div>
                  )
                }
                <div>
                  <label className="text-sm font-medium text-gray-700 m-2">
                    Email address
                  </label>
                  <Input
                    placeholder="Email"
                    type="text"
                    classname="w-full"
                    name="email"
                    value={input.email}
                    onChange={e=>onChange(e)}
                  />
                </div>
                <div className="mt-2">
                  <label className="text-sm font-medium text-gray-700 m-2">
                    Password
                  </label>
                  <Input
                    placeholder="Password"
                    type="password"
                    classname="w-full"
                    name="password"
                    value={input.password}
                    onChange={onChange}
                  />
                </div>

                <Button
                  text="signup"
                  variant="primary"
                  className="m-2 mt-8"
                  fullWidth
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
