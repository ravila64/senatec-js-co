function addTwoNums(a,b){
    try{
        if(typeof(a)!=='number'){
            throw new ReferenceError("the first argument is not a number");
        } else if(typeof(b)!=='number'){
                throw new ReferenceError("the second argument is not a number");
        } else {
            console.log("a + b ",a+b);
        }
    }catch(err){
        console.log("Error! ",err);
    }
}    
console.log("error en parametros");
addTwoNums(10, "5");
console.log("sin errores");
addTwoNums(10,5);

