// listen and silent are anagram

const word1 = "listen"
const word2 = "silent"


function anagrams(word1,word2){
    const normalized = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const normalarr1 = normalized(word1)
    const normalarr2 = normalized(word2)

    const arr1 = normalarr1.split("").sort().join("")
    const arr2 = normalarr2.split("").sort().join("")

    console.log(arr1, arr2) // sort according to acsending order
    return arr1 == arr2 
}
console.log(anagrams(word1,word2))
console.log(anagrams("A gentle man", "Elegant man"))