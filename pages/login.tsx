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
import { useRouter } from "next/router";
import Router from "next/router";
import { signIn } from "next-auth/react";

const Login: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  let router = useRouter();
  const axios = require("axios");

  const BASE_URL = process.env.DEV_BASE_URL;

  const loginAPI = async (data) => {
    const options = {
      method: "POST",
      url: `${BASE_URL}users/login`,
      data: {
        email: data.email,
        password: data.password,
      },
    };
    // console.log(`The URL ${BASE_URL}users/login`);

    await axios
      .request(options)
      .then(function (response: any) {
        console.log("Here condition success", response.data);
        router.push("/dashboard");
      })
      .catch(function (error: any) {
        console.log("Here condition error", error, error.response.data.message);
        setError(error.response.data.message);
      });
  };

  // const loginAPI = async () => {
  //   const email = formData.email;
  //   const password = formData.password;

  //   const res = await fetch("http://slt232asif:4000/api/v1/users/login", {
  //     method: "POST",
  //     body: JSON.stringify({ email: email, password: password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   // console.log(res);
  //   const data = await res.json();

  //   console.log("The Data is: ", data);
  //   console.log("The Token is: ", data.token);
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (data) => {
      let errors: any = {};

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      return errors;
    },
    onSubmit: async (data) => {
      // console.log(data, "Check Data");
      // setFormData(data);
      // console.log("Before the function");
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res.status === 200) {
        // Router.push("/dashboard");
        console.log(res);
      }
      console.log(res);
      // debugger;
      // await loginAPI(data);
      // console.log("After the function");

      // formik.resetForm();
    },
  });
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

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
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Log in to your account to stay updated
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            onSubmit={formik.handleSubmit}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-6">
                <label htmlFor="email-address" className="sr-only">
                  Email Or Username
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email or Username"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              {getFormErrorMessage("email")}
              <div className="mt-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              {getFormErrorMessage("password")}
            </div>

            <div className="flex items-center justify-between">
              {error ? (
                <div className="flex items-center justify-start">
                  <div className="text-sm">
                    <p className="font-medium forget-color">{error}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-start">
                  <div className="text-sm">
                    <p className="font-medium forget-color">&nbsp;</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link
                    href="/forgetPassword"
                    className="font-medium forget-color"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              Don’t have an account? &nbsp;
              <Link href="/register" className="font-medium forget-color">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
