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

  console.log("getBookInfo", okase);

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

  const okdsewq = {
    ...ijsadw,
    mediaType: "book",
    googleID: id,
    thumbnail: imageLinks["thumbnail"],
    // isbn13: industryIdentifiers[0]["identifier"],
    // isbn10: industryIdentifiers[1]["identifier"],
  };

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
    subtitleTwo: searchInfo.textSnippet,
  };

  // console.log("cleanBaseApi.-zz", okdsewq);

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
