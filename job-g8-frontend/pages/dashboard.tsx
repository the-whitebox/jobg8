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
import axios from "axios";

export const getStaticProps = async () => {
  // const options = {
  //   method: "POST",
  //   url: "http://localhost:",
  //   params: {
  //     username: "username",
  //     password: "password",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response: any) {
  //     console.log(response.data);
  //     const jobs = response.data.json();

  //     return {
  //       props: {jobs: jobs}
  //   }
  //   })
  //   .catch(function (error: any) {
  //     console.log(error);
  //   });

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { jobs: data },
  };
};

const Dashboard: NextPage = ({ jobs }) => {
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
            <div className="mt-3 w-full col-span-8">
              <label className="relative block">
                <span className="sr-only">Search</span>

                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white  w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 mr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
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
          <div className="flex-col justify-start">
            <p className="text-2xl tracking-tight text-gray-900">Latest jobs</p>
          </div>

          {/* -------------------Table Starts Here -------------------------------- */}

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Company
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Classification
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          WhiteBox
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Developer
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Backend Dev
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Lahore
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          $1500-$1800
                        </td>
                      </tr>
                      {jobs.map((job: any) => (
                        <tr className="bg-gray-100 border-b" key={job.id}>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.username}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.address.street}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {job.phone}-{job.company.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------Table ends here---------------- */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
