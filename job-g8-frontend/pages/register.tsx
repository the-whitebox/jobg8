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

const Register: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const axios = require("axios");

  function registerAPI() {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      accept: false,
    },
    validate: (data) => {
      let errors: any = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

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

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      console.log(data, "Check Data");
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
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
            Sign Up
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account to stay updated
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px ">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Enter Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Email"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 ">
                <label htmlFor="first-name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="firstname"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="first-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastname"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4 ">
              <label htmlFor="street" className="sr-only">
                Street
              </label>
              <input
                id="street"
                name="street"
                type="text"
                required
                className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Street"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 mt-4">
                <label htmlFor="zip" className="sr-only">
                  Zip
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Zip"
                />
              </div>
              <div className="mb-4 mt-4">
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 ">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Country"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
            </div>
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
              />
            </div>
            <div className="flex items-center ">
              <input
                id="ack-check"
                name="ack-check"
                type="checkbox"
                className="h-4 w-4 mt-3"
              />
              <label
                htmlFor="ack-check"
                className="ml-2 text-sm text-gray-900 mt-3"
              >
                By clicking Sign Up, I agree that I have read and accepted the
                Terms of Use and Privacy Policy.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <div className="text-sm">
            Already have an account? &nbsp;
            <Link href="/login" className="font-medium forget-color">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
