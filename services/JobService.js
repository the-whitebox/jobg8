export class JobService {
  getJobs = async (pageSize, pageNumber) => {
    // const axios = require("axios");
    // const options = {
    //   method: "GET",
    //   url: "http://desktop-cie1cs2:8080/api/v1/jobs",
    //   data: {
    //     pageSize: pageSize,
    //     pageNumber: pageNumber,
    //   },
    // };

    // await axios
    //   .request(options)
    //   .then(function (response) {
    //     const data = response.data;
    //     console.log("From Service", data);
    //     // debugger;
    //     return data;
    //   })
    //   .catch(function (error) {
    //     console.log("Here in Error", error);
    //   });
    let data = { pageSize: pageSize, pageNumber: pageNumber };

    const res = await fetch("http://desktop-cie1cs2:8080/api/v1/jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();

    // console.log(response);
    // console.log(data.jobList);
    // console.log(data.pageInfo);
    return response;
  };
}
