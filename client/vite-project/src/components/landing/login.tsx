import { useRecoilState } from "recoil";
import { emailState, passwordState } from "../../states/state.jsx";
import React from "react";
import { ChangeEvent, useEffect } from "react";
import temp from "../../ui/illustrations/Login.gif";
export default function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <img src={temp}></img>
      <div className="mt-44 relative">
        <div className="flex flex-col">
          <div className="mb-2 flex flex-col">
            <input
              placeholder="enter your email here"
              className="border-2 w-72 h-[52px] px-4 my-2 rounded"
              onChange={handleEmail}
            ></input>
          </div>
          <div className="mb-1 flex flex-col">
            <input
              placeholder="enter your password here"
              className="border-2 w-72 h-[52px] px-4 my-2 rounded"
              onChange={handlePassword}
            ></input>
          </div>
        </div>
        <button className="absolute left-[65px] mt-4 rounded-full px-12 py-2 bg-temp hover:border-0 text-white hover:bg-cur hover:scale-110 duration-300">
          Log In
        </button>
      </div>
    </div>
  );
}
