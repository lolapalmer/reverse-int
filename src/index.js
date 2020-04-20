module.exports = function reverse (n) {
  if (n < 0){
      return -reverse(-n)
  };
  let str = n.toString()
  let strArray = str.split("");
  let revArray = strArray.reverse();
  let rev = revArray.join("");
  return Number(rev);
}
