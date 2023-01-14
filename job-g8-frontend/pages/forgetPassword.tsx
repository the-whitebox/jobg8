import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";

const ForgetPassword: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const axios = require("axios");

  function forgetPwdAPI() {
    const options = {
      method: "POST",
      url: "http://localhost:",
      params: {
        username: "username",
        password: "password",
      },
    };

    axios
      .request(options)
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 colorGrey mainDiv">
      {/* <nav className="flex justify-between">
        <Link href="#">
          <Image
            src="/public/images/findmycv_logo.png"
            height={144}
            width={144}
            alt="Find My CV"
          />
        </Link>
      </nav> */}
      <div className="w-full max-w-md space-y-8">
        <div className="flex-col justify-start">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            No worries! Just enter your email and we’ll send you a reset
            password link.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="mb-6">
              <label htmlFor="email-address" className="sr-only">
                Enter recovery email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter recovery email"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Password Reset Link
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <div className="text-sm">
            Just remember? &nbsp;
            <Link href="/login" className="font-medium forget-color">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
