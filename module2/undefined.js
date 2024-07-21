function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}

let x = 10;
console.log(test(x));
// Expected output: "Undefined value!"

let y;
if (typeof y === "undefined") {
  console.log("y undefined");
  // these statements execute
} else {
  console.log("y not undefined");
}
