const { parseBookResult, getBookInfo } = require("./bookFuncs");
const logs = require("./logFuncs");
const { getExtString } = require("./stringFuncs");

async function getMediaInfo({ link, name }) {
  let extInfo = "";

  const osdker = getExtString(link);

  // logs.logga("getExtString", osdker);

  switch (osdker) {
    case "pdf":
      // logs.logga("FOUND_PDF", osdker);
      extInfo = await getBookInfo(name);
      break;
    //   default:
    //     // logs.logga("FOUND_DEFAULT", osdker);
    //     extInfo = getVidInfo(link);
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
    ...query,
  };

  console.log("___ oksde ___", oksde);

  let okasdf =
    //
    await getMediaInfo(oksde);

  // okasdf = okasdf ? okasdf :

  res.json(okasdf);
};
