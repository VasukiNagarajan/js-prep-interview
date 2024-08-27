function longestWord(str){
    let words = str.split(" ") // Use space as delimeter in split
    let longWord = ""

    for(let word of words){
        if(word.length > longWord.length){
            longWord = word
        }
        else if(word.length == longWord.length){
            longWord +=word
        }
    }
    return longWord
}

console.log(longestWord("I love to write code in JavaScript languagesr"))