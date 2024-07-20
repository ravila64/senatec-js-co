const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};

console.log("name ", person.name);
console.log("edad ", person.age);
console.log("datos :");
person.bio();
console.log("Saludo :");
person.introduceSelf();

const person2 = {
  name: ["Bob", "Smith"]
};
console.log("First name ", person2.name[0]);
console.log("Last name ", person2.name[1]);

const person3 = {
  name: {
    first: "Bob",
    last: "Smith"
  }
};
console.log("First name ", person3.name.first);
console.log("Last name ", person3.name.last);

//Bracket notation
person.age = 45;
person["name"]["last"] = "Maria";
console.log(person["age"]);
console.log(person["name"]["first"]);
// person4
const person4 = {
  name: ["Bob", "Smith"],
  age: 32
};

function logProperty(propertyName) {
  console.log(person4[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
person4["eyes"] = "hazel";
person4.farewell = function () {
  console.log("Bye everybody!");
};
// contructores
function createPerson(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}. I have ${this.age} years old`);
  };
  return obj;
}
const cliente = createPerson("Rene A", 60);
cliente.introduceSelf();
//
//   const myDiv = document.createElement("div");
//   const myVideo = document.querySelector("video");
//
//  const myNotification = new Notification("Hello!");

// arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
//
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
console.log("Imprime sequence");
for (let index = 0; index < sequence.length; index++) {
  console.log(sequence[index]);
}
console.log("Imprime random ");
for (let i = 0; i <= random.length; i++) {
  if (i == 2) {
    for (let j = 0; j <= random[i].length; j++) {
      console.log("--------> ", random[i][j]);
    }
  } else {
    console.log(random[i]);
  }
}

// push
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
console.log(cities.length);
// insert first pos
cities.unshift("Edinburgh"); // insertar 1era pos
console.log(cities);
// remove last city
cities.pop();
console.log(cities);
// remove first item
cities.shift();
console.log(cities);
// for - pf
const birds = ["Parrot", "Falcon", "Owl"];
for (const bird of birds) {
  console.log(bird);
}
// map
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
// filter
function isLong(city) {
  return city.length > 8;
}
cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
//split
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
console.log(data);
cities = data.split(",");
console.log(cities);
//
const commaSeparated = cities.join(",");
console.log(commaSeparated);
//
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger
//


