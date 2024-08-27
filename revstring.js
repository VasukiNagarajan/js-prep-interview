// revstring using loop

function reverString(str){
    let reversal = ""
    for(i=str.length-1; i>=0; i--){
        reversal += str[i]
    }
    return reversal;
}

console.log(reverString("Hi Vasuki Welcome"))

// revstring using inbuilt functions

const word = "I am Vasuki from Tuticorin"
const rev = word.split("").reverse().join("")
console.log(rev)