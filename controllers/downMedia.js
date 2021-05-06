// import QueryFunc from "./queryFuncs";
// import { logs } from "@todcode/components/";

module.exports.GetMediaInfo = async ({ query, ...sawe }, res) => {
  const ytdl = require("ytdl-core");

  const ijae =
    //
    // ""
    // "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDMxMy9wb2RjYXN0LnhtbA/episode/MGFjMWMyNGItZmRhZS00MGQwLWE5MGMtN2VjMWFmYTdlMDNm?sa=X&ved=2ahUKEwiLuqe8l4rwAhXH4bsIHSbXC6wQkfYCegQIARAF";
    "https://www.youtube.com/watch?v=sbX_ak0N1EI&t=40s";
  // query.youtube
  //   ? `https://www.youtube.com/watch?v=${query.youtube}`
  //   : query.link;

  const linkvar = ijae;
  const asde = await ytdl.getBasicInfo(linkvar);
  const ksdf = asde?.player_response?.videoDetails;
  const aodake = query.list;

  const kdsew = {
    youtube: ksdf.videoId,
    name: ksdf?.title,
    duration: parseFloat(ksdf.lengthSeconds),
  };

  //   console.info("___ loggo req, res ___", ksdf);
  console.log("___ loggo aodake ___", aodake);
  console.log("___ loggo asde ___", kdsew);
  //   const dsfaewr = await ytdl.getBasicInfo(
  //     "https://www.youtube.com/watch?v=A5YiqaQbsyI"
  //   );
  //   console.log("___ loggo asde ___", dsfaewr);

  // const sokase = await wp.posts().get();

  // console.log("___ loggo sokase ___", sokase);

  // wp.posts()
  //   .get()
  //   .then((posts) => {
  //     console.log("___ loggo MAIN posts ___", posts);
  //   });

  //   var yt = require("youtube.get-video-info");

  //   async function goweaew() {
  //     const okaeas =
  //       //
  //       // await ytdl.getInfo(linkvar)
  //       // await ytdl.getBasicInfo(linkvar)
  //       await yt.retrieve(linkvar, function (err, res) {
  //         if (err) throw err;
  //         logs.logga("RETREIVE", res);
  //       });

  //     return okaeas;
  //   }

  //   const { ...asde } =
  //     //
  //     QueryFunc("getYoutobe", goweaew);

  res.json(kdsew);
};
