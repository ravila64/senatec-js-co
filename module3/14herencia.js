var bird = {
    plumas:true,
    patas:true,
    vuela:true
}

var eagle = Object.create(bird);
console.log(eagle);
console.log("Plumas ",eagle.plumas);
console.log("Patas ",eagle.patas);
console.log("puede volar ",eagle.vuela);

var eagle2 = Object.create(bird);
console.log(eagle2);
console.log("eagle2, vuela ",eagle2.vuela);

var pinguin = Object.create(bird);
pinguin.vuela = false;
console.log("pinguin vuela ",pinguin.vuela);