// using regex to remove all the white spaces

function removeSpace(str){
    const cleanedStr = str.replace(/\s/g, "")
    return cleanedStr
}

console.log(removeSpace("Happy,    Day"))

// using for loop to remove all the white spaces

function spaceRemove(str){
    let removedStr = ''
    for(let word of str){
        if(word !== ' '){
        removedStr += word
        }
    }
    return console.log(removedStr)  
}

spaceRemove("Happ   yy")