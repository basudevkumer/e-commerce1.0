import { allIcons } from "@/helpers/IconProvider";
import React from "react";
import Button from "../commonComponent/commonButton/Button";

const SignIn = () => {
  const { productInfoActivites } = allIcons;
  return (
    <div className="p-8 shadow-2xl  flex flex-col items-center text-gray_900 bg-gray_00 rounded">
      <h6 className="xl_600 text-gray_900">Sign in to your account</h6>
      <div className="py-5">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="emails" className="sm_400 text-gray_900 pb-2">
            Email Address
          </label>
          <input
            type="email"
            id="emails"
            className="w-[360px] h-[55px] border border-gray_100 rounded sm_400 text-gray_900 "
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-5 ">
          <div className="flex justify-between">
            <label htmlFor="pass" className="sm_400 text-gray_900 pb-2">
              Password
            </label>
            <p className="text-secondary_500 sm_500">Forget Password</p>
          </div>
          <div className="relative ">
            <input
              type="password"
              id="pass"
              className="w-[360px] h-[55px] border border-gray_100 rounded sm_400 text-gray_900 "
            />
            <span className="absolute text-xl top-1/2 -translate-y-1/2 right-5 z-50 cursor-pointer z-60">
              {productInfoActivites[2].icon}
            </span>
          </div>

       <div className="mt-5">
           <Button
            children={"Login"}
            className={`
            justify-center  !bg-primary_500 !text-gray_00
            `}
          />
       </div>
          <div className="flex justify-between items-center gap-x-2 mt-6 mb-3   ">
            <div className="border border-gray_100 w-full"></div>
            
            <p className="text-gray_600 sm_500 whitespace-nowrap ">Don’t have account</p> 
            <div className="border border-gray_100 w-full"></div>
          </div>
          <button className=" border-2 border-primary_500 text-primary_500 py-1cursor-pointer  heading7">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
