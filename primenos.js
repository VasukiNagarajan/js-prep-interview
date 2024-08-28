function findingPrimeNos(num){
    if(num<=1){
        return false
    }
    for(i=2; i<num/2; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log(findingPrimeNos(7))
console.log(findingPrimeNos(17))
console.log(findingPrimeNos(3))
console.log(findingPrimeNos(1))
console.log(findingPrimeNos(-7))
console.log(findingPrimeNos(2))
console.log(findingPrimeNos(18))
console.log(findingPrimeNos(5))
console.log(findingPrimeNos(13))