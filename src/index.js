module.exports = function reverse (n) {
  if (b < 0){
      return -reverse(-b)
  };
  let str = n.toString()
  let strArray = str.split("");
  let revArray = strArray.reverse();
  let rev = revArray.join("");
  return Number(rev);
}
