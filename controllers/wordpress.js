const package = require("./../package");
const fetch = require("node-fetch");
const { default: axios } = require("axios");
var WPAPI = require("wpapi");

module.exports.healthcheck = async ({ query, ...req }, res) => {
  console.log("___ logga query ___", query);

  let fdkreds = query.name;
  let dsfe =
    //
    // "http://src.wordpress-develop.dev/wp-json"
    "https://wordpress.org/news/wp-json/";

  var wp = new WPAPI({ endpoint: dsfe });

  let xobkdf =
    //
    await wp.posts().get();
  // wp.getPosts()
  //   axios.get(dsfe);

  function ajdwe(adsfre) {
    console.log("___ logga adsfre ___", adsfre);

    return {
      id: adsfre.id,
    };
  }

  const okwqe = xobkdf.map(ajdwe);

  console.log("___ logga xobkdf ___", xobkdf.data);

  let oksad =
    //
    okwqe;
  // xobkdf;
  // xobkdf.data;
  // query;
  //   {
  //     status: "ok",
  //     uptime: process.uptime(),
  //     name: package.name,
  //     version: package.version,
  //   }

  res.json(oksad);
};
