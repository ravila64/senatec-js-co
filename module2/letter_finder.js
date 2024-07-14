function letterFinder(word, match) {
  for (let index = 0; index < word.length; index++) {
    var elemento = word[index];
    if (elemento==match){
        console.log("Found the ",match, " at ", index);
    }else{
        console.log('---No match found at', index);
    }
  }
}

var word1="educacion a e i o u";
console.log("Longitud cadena ", word1.length);
letterFinder(word1,"a");


