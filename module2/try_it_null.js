function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // Expected output: 0

  // other examples
console.log("typeof null ",typeof null); // "object" (not "null" for legacy reasons)
console.log("typeof undefined ",typeof undefined); // "undefined"
console.log("null === undefined ",null === undefined); // false
console.log("null == undefined ",null == undefined); // true
console.log("null === null ",null === null); // true
console.log("null == null ",null == null); // true
console.log("!null ",!null); // true
console.log("Number.isNaN(1 + null) ",Number.isNaN(1 + null)); // false
console.log("Number.isNaN(1 + undefined) ",Number.isNaN(1 + undefined)); // true
//
