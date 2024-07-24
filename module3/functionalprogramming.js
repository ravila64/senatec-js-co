// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color:${color};`;
  style += `background:${background};`;
  style += `fontSize:${fontSize};`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = `color:tomato; font-size:50px;`;
  var message = "No celebrate ";
  if (reason == "birthday") {
    message = `%cHappy birthday`;
  } else if (reason == "champions") {
    message = `%cCongrats on the title!`;
  }
  console.log(message, fontStyle);
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
  consoleStyler("ef7c8e", "fae8e0", "30px", "You made it!");
  celebrateStyler("champions");
}

// Call styleAndCelebrate
styleAndCelebrate();
