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

const Job: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  return (
    <div className="">
      <div className=" colorGrey">
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
          <div className="mr-4 grid grid-flow-col gap-2 flex justify-between">
            <div className="mt-3 w-full col-span-4">
              <button
                type="submit"
                className="logout-btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 colorGrey ">
        <div className="w-full space-y-8">
          <div className="mt-8 space-y-6">
            <div className="flex">
              <Image
                src="/images/findmycv_logo.png"
                height={116}
                width={116}
                alt="Job"
              />
              <div className="flex-1 ml-3">
                <p className="text-3xl text-black">123 Recruitment</p>
                <div className="flex justify-between">
                  <p className="text-xl text-gray-500">Agency</p>
                  <div className="flex w-64 justify-between">
                    <div className="flex">
                      <span>
                        <Image
                          src="/images/icons/salary.png"
                          height={20}
                          width={20}
                          alt="Salary"
                        />
                      </span>
                      <p className="ml-2">1000$-2000$</p>
                    </div>
                    <div className="flex">
                      <span>
                        <Image
                          src="/images/icons/suitcase.png"
                          height={20}
                          width={20}
                          alt="Timing"
                        />
                      </span>
                      <p className="ml-2">Full Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="flex mt-14 grid-cols-3 gap-20 w-full justify-around">
                <div className="flex-col">
                  <p className="text-lg text-black">Classifications</p>
                  <p className="text-lg text-gray-600">IT & Communications</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Sub Classifications</p>
                  <p className="text-lg text-gray-600">Other</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Positions</p>
                  <p className="text-lg text-gray-600">Software Developer</p>
                </div>
              </div>
              <div className="flex-col lg:px-32 mt-8">
                <p className="text-lg text-black">Description</p>
                <p className="text-lg text-gray-600">
                  Experienced Software developer required for exciting new
                  startup company. Must have at least 2 years commercial
                  experience in C#, ASP.Net and SQL, and be use to working in a
                  team environment.
                </p>
              </div>
              <div className="flex grid-cols-3 gap-20 w-full justify-around mt-8">
                <div className="flex-col">
                  <p className="text-lg text-black">Classifications</p>
                  <p className="text-lg text-gray-600">IT & Communications</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Sub Classifications</p>
                  <p className="text-lg text-gray-600">Other</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Positions</p>
                  <p className="text-lg text-gray-600">Software Developer</p>
                </div>
              </div>
              <div className="flex grid-cols-3 gap-20 w-full justify-around mt-8">
                <div className="flex-col">
                  <p className="text-lg text-black">Classifications</p>
                  <p className="text-lg text-gray-600">IT & Communications</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Sub Classifications</p>
                  <p className="text-lg text-gray-600">Other</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Positions</p>
                  <p className="text-lg text-gray-600">Software Developer</p>
                </div>
              </div>
              <div className="flex grid-cols-3 gap-20 w-full justify-around mt-8">
                <div className="flex-col">
                  <p className="text-lg text-black">Classifications</p>
                  <p className="text-lg text-gray-600">IT & Communications</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Sub Classifications</p>
                  <p className="text-lg text-gray-600">Other</p>
                </div>
                <div className="flex-col">
                  <p className="text-lg text-black">Positions</p>
                  <p className="text-lg text-gray-600">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
