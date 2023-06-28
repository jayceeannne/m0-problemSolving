//goal is to print the words that end with "ing"

//create an array
//create a function
//create a for loop
//create a conditional (if statement) to print out words endind with "ing"

var hobbies = ["swimming", "dancing", "knit"];

function activities(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].endsWith("ing") === true){
            console.log(arr[i]);
        }
    }
}

activities(hobbies);