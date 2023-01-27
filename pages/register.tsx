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

const Register: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  let router = useRouter();
  const axios = require("axios");

  const registerAPI = async (data) => {
    const options = {
      method: "POST",
      url: "http://desktop-cie1cs2:8080/api/v1/users/register",
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        street: data.street,
        zip: data.zip,
        city: data.city,
        country: data.country,
        phone: data.phone,
      },
    };

    await axios
      .request(options)
      .then(function (response: any) {
        console.log("Here condition success", response.data);
        router.push("/login");
      })
      .catch(function (error: any) {
        console.log("Here condition error", error);
      });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      street: "",
      zip: "",
      city: "",
      country: "",
      phone: "",
    },
    validate: (data) => {
      let errors: any = {};

      if (!data.firstName) {
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

      return errors;
    },
    onSubmit: async (data) => {
      console.log(data, "Check Data");
      // setFormData(data);
      console.log("Before Submit");
      await registerAPI(data);
      console.log("After Submit");
      // setShowMessage(true);

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
      <div className="flex h-5/6 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex-col justify-start">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign Up
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Create an account to stay updated
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            onSubmit={formik.handleSubmit}
            method="POST"
          >
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4 ">
                  <label htmlFor="first-name" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="last-name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    required
                    className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
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
                  value={formik.values.street}
                  onChange={formik.handleChange}
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
                    value={formik.values.zip}
                    onChange={formik.handleChange}
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
                    value={formik.values.city}
                    onChange={formik.handleChange}
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
                    value={formik.values.country}
                    onChange={formik.handleChange}
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
                    className="relative w-full px-3 py-2 first-letter:border rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Phone number (Optional)"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex items-center ">
                <input
                  id="ack-check"
                  name="ack-check"
                  type="checkbox"
                  className="h-4 w-4 mt-3"
                  required
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
    </div>
  );
};

export default Register;
