const { default: axios } = require("axios");
const { omit, pick } = require("lodash");
const { logga } = require("./logFuncs");

module.exports.getBookInfo = async (nameo, sadwoqke) => {
  var books = require("google-books-search");

  function sadwoqke(error, results) {
    if (!error) {
      logga("Results", results[0]);
      succBook(results[0]);
      logga("Results", oksqweas);
    } else {
      logga(error);
    }
  }

  let apibase = "https://www.googleapis.com/books/v1/volumes?q=" + nameo;

  const iaseawe =
    //

    // await books.search(nameo, sadwoqke);
    await axios.get(apibase);

  const okase = succBook(iaseawe.data.items);

  // // logs.logga("getBookInfo", okase);

  return okase;
};

function parseBookResult({
  images,
  imageLinks,
  industryIdentifiers,
  id,
  ...dsdf
}) {
  // 1list
  let oasdase = [
    "title",
    "subtitle",
    "publishers",
    "publishedDate",
    // "authors",
    // "description",
    // "categories",
    // "language",
    // "subtitleTwo",
    // "pageCount",
  ];

  const ijsadw = pick(dsdf, oasdase);

  // logs.logga("industryIdentifiers-zz", industryIdentifiers);

  const okdsewq = {
    ...ijsadw,
    mediaType: "book",
    googleID: id,
    thumbnail: imageLinks && imageLinks["thumbnail"],
  };

  function aseow({ type, identifier }) {
    let oasd = "";
    switch (type) {
      case "OTHER":
        oasd = "catalogueID";
        break;
      default:
        oasd = type;
    }

    okdsewq[oasd] = identifier;

    return oasd;
  }

  const okas = industryIdentifiers && industryIdentifiers.map(aseow);

  // logs.logga("okas-zz", okas);

  return okdsewq;
}

function cleanBaseApi({ imageLinks, searchInfo, volumeInfo, ...dsdf }) {
  let oasdase = [
    //
    "id",
    "imageLinks",
  ];

  const ijsadw = pick(dsdf, oasdase);

  const okdsewq = {
    ...volumeInfo,
    ...ijsadw,
    subtitleTwo: searchInfo && searchInfo.textSnippet,
  };

  // // logs.logga("cleanBaseApi.-zz", okdsewq);

  return okdsewq;
}

function niceBooks(ofkdsaew) {
  // logga("___ ofkdsaew ___", ofkdsaew);

  return parseBookResult(cleanBaseApi(ofkdsaew));
}

function succBook(results) {
  // results = [results[0]];

  const aseoeo = results.map(niceBooks);

  return aseoeo;
}
