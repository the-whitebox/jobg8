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
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Ripple } from "primereact/ripple";
import { Dropdown } from "primereact/dropdown";
import { JobService } from "../services/JobService";

import { useSession } from "next-auth/react";
import Router from "next/router";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import "../../index.css";
// import ReactDOM from "react-dom";

// export const getStaticProps = async () => {
//   // const options = {
//   //   method: "POST",
//   //   url: "http://localhost:",
//   //   params: {
//   //     username: "username",
//   //     password: "password",
//   //   },
//   // };

//   // axios
//   //   .request(options)
//   //   .then(function (response: any) {
//   //     console.log(response.data);
//   //     const jobs = response.data.json();

//   //     return {
//   //       props: {jobs: jobs}
//   //   }
//   //   })
//   //   .catch(function (error: any) {
//   //     console.log(error);
//   //   });
//   // const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   // Send Page # and page size by default

//   const res = await fetch("http://desktop-cie1cs2:8080/api/v1/jobs");

//   const data = await res.json();

//   return {
//     props: { jobs: data },
//   };
// };

const Dashboard: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [jobs, setJobs] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [pageSize, setPageSize] = useState(1000);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { status, data } = useSession();

  const jobService = new JobService();
  function callJobs(pageSize, pageNumber) {
    jobService.getJobs(pageSize, pageNumber).then(function (response) {
      // debugger;
      console.log("Dashboard ", response, pageSize);
      setJobs(response?.jobList);
      setPageList(response?.pageInfo);
      setPageNumber(response?.pageInfo?.pageNumber);
      setPageSize(response?.pageInfo?.pageSize);
    });
  }

  useEffect(() => {
    // if (status === "unauthenticated") Router.replace("/login");
    // if (status === "authenticated") {
    callJobs(pageSize, pageNumber);
    // }
  }, []);

  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  const template1 = {
    layout:
      "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ];

      return (
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      );
    },
  };

  const linkBodyTemplate = (rowData: any) => {
    return (
      <div>
        <Link className="underline text-sky-500" href={rowData.ApplicationURL}>
          Click Here
        </Link>
      </div>
    );
  };

  return (
    <div className="">
      <div className="colorGrey">
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
              {/* <button
                type="submit"
                className="logout-btn-color group relative flex w-full justify-center border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                // onClick={() => {
                //   throw new Error("Sentry Frontend error");
                // }}
              >
                Logout
              </button> */}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 colorGrey ">
        <div className="w-full space-y-8">
          <div className="flex-col justify-start">
            <p className="text-2xl tracking-tight text-gray-900">Latest jobs</p>
          </div>

          {/* -------------------DataTable starts Here -------------------------------- */}
          <div className="card">
            <DataTable
              value={jobs}
              paginator
              responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} of {totalPages} pages"
              rows={10}
              stripedRows
              rowsPerPageOptions={[10, 20, 50]}
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
            >
              <Column
                field="SalaryMaximum"
                header="Salary"
                style={{ width: "10%" }}
              ></Column>

              <Column
                field="Position"
                header="Position"
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="Location"
                header="Location"
                style={{ width: "20%" }}
              ></Column>

              <Column
                field="AdvertiserName"
                header="Company"
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="Classification"
                header="Classification"
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="ApplicationURL"
                header="Job URL"
                body={linkBodyTemplate}
                style={{ width: "10%" }}
              ></Column>
            </DataTable>
          </div>

          {/* ------------------DataTable Ends here---------------- */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
