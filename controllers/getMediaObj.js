const { parseBookResult, getBookInfo } = require("./bookFuncs");
const { logga } = require("./logFuncs");
const { getExtString } = require("./stringFuncs");

async function getMediaInfo({ link, name }) {
  let extInfo = "";

  const osdker = getExtString(link);

  logga("getExtString", osdker);

  switch (osdker) {
    case "pdf":
      logga("FOUND_PDF", osdker);
      extInfo = await getBookInfo(name);
      break;
    default:
      logga("FOUND_DEFAULT", osdker);
    //   extInfo = getVidInfo(link);
  }

  return extInfo;
}

module.exports.getMediaObj = async ({ query, ...sawe }, res) => {
  let linkios =
    //
    "https://www.nothuman.net/images/files/discussion/2/bc2d525a2ac485f688a1f2dcb7740432.pdf";
  //   query.link;

  let nmaeos =
    //
    "A Clash of Kings";

  const oksde = {
    link: linkios,
    name: nmaeos,
  };

  const okasdf =
    //
    // await "";.
    // await getBookInfo(nmaeos);
    await getMediaInfo(oksde);

  //   console.log("BASE", okasdf);

  //   res.status(200).json({ status: "ok", message: result, statusCode: 200 });

  res.json(okasdf);
};
