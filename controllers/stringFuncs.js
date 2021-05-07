module.exports.getExtString = (sdfweq) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(sdfweq)[1];

  return ext;
};
