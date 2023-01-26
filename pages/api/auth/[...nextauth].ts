import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";

const BASE_URL = process.env.DEV_BASE_URL;
const axios = require("axios");

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
  const axios = require("axios");
  await axios
    .request(options)
    .then(function (response: any) {
      console.log("Here condition success", response.data);
      // Router.push("/dashboard");
    })
    .catch(function (error: any) {
      console.log("Here condition error", error, error.response.data.message);
      // setError(error.response.data.message);
      // throw new Error("Invalid credentials");
    });
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        // const { response, setResponse } = useState("");
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        debugger;

        const options = {
          method: "POST",
          url: `${BASE_URL}users/login`,
          data: {
            email: email,
            password: password,
          },
        };

        const axios = require("axios");
        await axios
          .request(options)
          .then(function (response: any) {
            console.log("Here condition success", response.data);
            // setResponse(response.data);
          })
          .catch(function (error: any) {
            console.log(
              "Here condition error",
              error,
              error.response.data.message
            );
            throw new Error("Invalid credentials");
          });

        // const response = await loginAPI(credentials);
        // if (email !== "john@gmail.com" || password !== "1234") {
        //   throw new Error("Invalid credentials");
        // }

        // debugger;
        // console.log("This is response: ", response);
        // return {
        //   response: response,
        //   // name: response?.user?.firstName,
        //   // email: response?.user?.email,
        // };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
