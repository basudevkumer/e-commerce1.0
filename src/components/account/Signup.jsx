import React, { useState } from "react";
import { FaRegUser, FaRegEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray_50 font-publicSans">
      <div className="w-full max-w-md bg-gray_00 rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="heading3 text-gray_900">Create Account 🚀</h1>
          <p className="sm_400 text-gray_500 mt-1">
            Join with us and start your journey
          </p>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="label4 text-gray_600">Full Name</label>
          <div className="relative mt-1">
            <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray_400" />
            <input
              type="text"
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray_50 border border-gray_100 focus:border-primary_500 focus:bg-gray_00 transition outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="label4 text-gray_600">Email Address</label>
          <div className="relative mt-1">
            <FaRegEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray_400" />
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray_50 border border-gray_100 focus:border-primary_500 focus:bg-gray_00 transition outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="label4 text-gray_600">Password</label>
          <div className="relative mt-1">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray_400" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-11 pr-11 py-3 rounded-xl bg-gray_50 border border-gray_100 focus:border-primary_500 focus:bg-gray_00 transition outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray_400 hover:text-gray_600"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="label4 text-gray_600">Confirm Password</label>
          <div className="relative mt-1">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray_400" />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-11 pr-11 py-3 rounded-xl bg-gray_50 border border-gray_100 focus:border-primary_500 focus:bg-gray_00 transition outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray_400 hover:text-gray_600"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" />
          <span className="tiny_400 text-gray_500">
            I agree to the{" "}
            <span className="text-primary_500 cursor-pointer">
              Terms & Conditions
            </span>
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-primary_500 hover:bg-primary_600 text-white md_500 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray_100"></div>
          <span className="tiny_400 text-gray_400">OR</span>
          <div className="flex-1 h-px bg-gray_100"></div>
        </div>

        {/* Google */}
        <button className="w-full border border-gray_100 hover:border-gray_200 py-3 rounded-xl sm_500 text-gray_700 transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="tiny_400 text-gray_500 text-center mt-6">
          Already have an account?{" "}
          <span className="text-primary_500 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;