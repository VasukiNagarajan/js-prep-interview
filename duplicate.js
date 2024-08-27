const num = [1,2,3,4,5,6,6,7,8,8]

const b = [...new Set(num)]

console.log(b)


// By using the filter refer notes
function dup(num){
let result = num.filter((value,index) => num.indexOf(value) === index)

    return result

}

console.log(dup(num))


// Using indexOf  empty uniqueArray

function duplicate(num){
    let uniqueArray = [];

    for(i=0;i<num.length;i++){
        if(uniqueArray.indexOf(num[i]) == -1){
            uniqueArray.push(num[i])
        }
    }

    return uniqueArray
}

console.log(duplicate(num))


// using simple for loop

const number = [1,33,8,66,55,66,8,1,33]
let uniq = []

for(i=0;i<number.length;i++){
    let isDup = false
    for(j=0; j<uniq.length; j++){
        if(number[i] === uniq[j]){
            isDup = true;
            break;
        }
    }
console.log(isDup)
        if(!isDup){
            uniq.push(number[i])
        }

}

console.log(uniq)