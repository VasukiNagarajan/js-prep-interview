function palindrome(str){
const lower = str.toLowerCase()
const revStr =  lower.split('').reverse().join('')
return lower == revStr
// return lower

}

console.log(palindrome("vasuki"))
console.log(palindrome("Malayalam"))
console.log(palindrome("racecar"))