const package = require("./../package");
const fetch = require("node-fetch");
const { default: axios } = require("axios");

module.exports.healthcheck = async ({ query, ...req }, res) => {
  console.log("___ logga query ___", query);

  const jkfdsr =
    //
    "https://swapi.dev/api/people/1";
  //   https://swapi.dev/api/people/1/"
  let xobkdf = await axios.get(jkfdsr);

  console.log("___ logga xobkdf ___", xobkdf.data);

  let oksad =
    //
    xobkdf.data;
  // query;
  //   {
  //     status: "ok",
  //     uptime: process.uptime(),
  //     name: package.name,
  //     version: package.version,
  //   }

  res.json(oksad);
};
