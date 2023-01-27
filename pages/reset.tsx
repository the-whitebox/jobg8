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

const Reset: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const axios = require("axios");

  function resetPwdAPI() {
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
    <div className="h-screen colorGrey">
      <div className="">
        <nav className="flex justify-between border-b-2 h-24 pt-4">
          <div className="mt-1 ml-2 ">
            <Link href="#">
              <Image
                src="/images/findmycv_logo.png"
                height={144}
                width={144}
                alt="Find My CV"
              />
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex h-5/6 items-center justify-center px-4 sm:px-6 lg:px-8  ">
        <div className="w-full max-w-md space-y-8">
          <div className="flex-col justify-start">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Create New Password
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please create a new password
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px">
              <div className="mb-4 ">
                <label htmlFor="new-password" className="sr-only">
                  Type New Password
                </label>
                <input
                  id="new-password"
                  name="newPassword"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Type New Password"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
