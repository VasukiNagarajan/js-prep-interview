function pali(str){
let lowerStr = str.toLowerCase();
let reversed = lowerStr.split("").reverse().join("")
return reversed == lowerStr
}

const string = "Racecar"
console.log(pali(string))

// without using inbuilt functions

function pali2(word){
const lowerWord = word.toLowerCase();
let cleanedstr = lowerWord.replace(/[^a-zA-Z0-9]/g, "")
console.log(cleanedstr)
let reversal = ""

for(i=cleanedstr.length-1; i>=0; i--){
    reversal += cleanedstr[i]
}

return cleanedstr == reversal
}

console.log(pali2("Malayalam"))
console.log(pali2("racecar racecar"))
console.log(pali2("A man, a plan, a canal, Panama"))
console.log(pali2("Mr. Owl ate my metal worm"))