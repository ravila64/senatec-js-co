function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}
let ice=new Icecream("Vainilla");
ice.meltIt(); // The Vainilla icecream has melted
// string
let apple = new String("apple");
console.log(apple); // --> String {'apple'}
apple.color="rojo";
console.log(apple);
//
console.log("abcd".match(/d/)); // null
console.log("abcd".match(/a/)); // ['a', index: 0, input: 'abcd', groups: undefined]

