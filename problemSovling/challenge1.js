//goal is to print an array of strings 
//and only print out the ones with 4 characters

// create an array 
// create a for loop 
// create a conditional (if statement) that will print out elements with 4 characters

var fruits = ["cherry", "pear", "plum", "kiwi"];

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length === 4) {
        console.log(fruits[i]);
        }
    }
