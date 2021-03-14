module.exports = function reverse(n) {
  let res = n.toString().split("");
  let newString;

  !res.includes("-")
    ? (newString = res.reverse().join(""))
    : (newString = res.slice(1).reverse().join(""));
  return newString;
};
