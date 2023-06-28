//make string
//declare function
//split method " "
//replace method using global flag
//rejoin


var sentence = "the spanish ships i can not see for they are out of sight"

function newS(str) {
    // var newStr =  str.split(" ")
   var newStr = str.replace(/s/g, "")
    console.log(newStr);
}


newS(sentence);
