const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
  console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
  console.log(greeting(null)); // "Howdy, stranger"

  // Conditional chains

  function example() {
    return condition1 ? value1
      : condition2 ? value2
      : condition3 ? value3
      : value4;
  }

  //example
  function example() {
    if (condition1) {
      return value1;
    } else if (condition2) {
      return value2;
    } else if (condition3) {
      return value3;
    } else {
      return value4;
    }
  }
  //
  /* COMENTARIO */
  // var x=150;

  

