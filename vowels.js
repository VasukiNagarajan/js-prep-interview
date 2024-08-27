function findingVowels(str){
    const vowels = ['a','e','i','o','u']
    const cleanedStr = [...str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")]
    const listVowels = []
    let count = 0
    for(i=0;i<cleanedStr.length;i++){
        for(j=0;j<vowels.length;j++){
            if(vowels[j] == cleanedStr[i]){
                count = count+1
                listVowels.push(cleanedStr[i])
            }
        }
    }
    return count + "-" + "These are the vowels found in the word-" + listVowels
}

console.log(findingVowels("Vasuki loves reading books"))

// using includes to check if a substring is present in a string

function vowelList(str){
    const vowels = ['a','e','i','o','u']
    let count = 0
    let list=""
    const lowerstr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    for(let word of lowerstr){
        if(vowels.includes(word)){
            count++
            list += word
        }
    }
    return count + "- " + list
}

console.log(vowelList("She reads books"))