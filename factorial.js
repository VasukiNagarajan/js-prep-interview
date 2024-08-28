function findFact(num){
    let factorial = 1

    // factorial of 0 is 1
    if(num == 0){
        return factorial
    }

    
    for(i=1;i<=num;i++){
        factorial = factorial*i
    }
    return factorial
}

console.log(findFact(5))
console.log(findFact(3))
console.log(findFact(7))
console.log(findFact(0))