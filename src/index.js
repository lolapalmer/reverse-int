module.exports = function reverse (n) {
   let a = n.toString()
   console.log("a1", a);
   let b = a.split("");
   console.log("split", b);
   let c = b.reverse();
   console.log("reverse", c);
   let d = c.join("");
   console.log("join", d);
   let e = parseInt(d);
return e;
}
