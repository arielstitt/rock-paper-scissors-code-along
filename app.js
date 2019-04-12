//game choices

choices = ['rock', 'paper', 'scissors']
//computer choice
//randomize the computer choices, 3 choices in total
random = Math.floor(Math.random() * 3)
//assign the random numbers to the index in the array
compChoice = choices[random]
console.log(random, compChoice)

//show the comp choice, on refresh show the rand choice
function DidChoose(){
    let compAnswer = document.getElementById('#compAnswer').innerHTML = compChoice
}

//user choices

//compare the choices

