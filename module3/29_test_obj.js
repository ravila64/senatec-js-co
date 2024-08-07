function testBracketsDynamicAccess() {
  // genera aleatoriamente la clave
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  var drone = {
    speed: 15,
    color: "orange"
  };
  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
