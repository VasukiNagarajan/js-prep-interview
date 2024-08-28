// Create a function which stores inside a secret word which cannot be changed or accessed from the outside

function outFunc(secret){
    const word = secret
    return {
        getMsg: function(){
            console.log("Secret is "+ word)
        },
        setMsg: function(secWord){
            console.log("Cannot modify the secret")
        }
}
}
console.log(outFunc("Js")) // not get the msg
// we are not calling the inner function so it cannot be accessed


const myMsg = outFunc("Javascript")

myMsg.getMsg()
myMsg.setMsg("ReactJs")


// Closures

function outerFunction(){
    const sentence = "learn to code"

    function innerFunction(){
        console.log(sentence)
    }

    innerFunction()
}

outerFunction()