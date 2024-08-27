// For largest assign the largest to num[0] then start comparing the start with each of elements in the array

function largestNos(num){
    let largest= num[0];

    for(i=1;i<num.length; i++){
        if(num[i] > largest){
            largest = num[i]
        }
    }

    return largest
}


console.log(largestNos([1,2,3,4,5,6,68,9]))

// Smallest number using functions in js

function findSmallNos(no){
const lex = no.sort() // sorts in lexicographically  i.e sorts 12, 33 considers 1 in 12 and 3 in 33
const ascending = no.sort((a,b)=>a-b)
console.log(lex, "-lexicographically sort")
console.log(ascending, "-ascending sort")
return "Smallest no is:"+ ascending[0]
}

console.log(findSmallNos([9,45,67,33,12,45,6]))