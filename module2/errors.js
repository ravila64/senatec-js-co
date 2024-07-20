try{
    throw new ReferenceError();
}catch(error){
    console.log(error);
    console.log("There was a Reference Error");
}
console.log("My program does no stop");
