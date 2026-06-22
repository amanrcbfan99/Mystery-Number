let randomnum = Math.ceil(Math.random()*50);
console.log(randomnum);
let attemts = 7;
let userinput = document.querySelector("#typehere");
let resetbtn = document.querySelector("#reset");
let submit = document.querySelector("#submit");
let gameresult = document.querySelector("#result");
let gamehint = document.querySelector("#hint")
let attemtsrem = document.querySelector("#attemptsremain")

submit.addEventListener("click", function(){
    let guess = Number(userinput.value);
    if(guess===randomnum){
        gameresult.innerText = "Congratulation, You guessed the Right Number..!";
        gameresult.style.color = "rgb(13,204,13)";
        attemts--;
        attemtsrem.innerText = "Attempts Remaining : "+ attemts;

    } else{
        attemts--;
        attemtsrem.innerText = "Attempts Remaining : "+ attemts;
        if(attemts<=0){
            gameresult.innerHTML = "Game Over..! Reset the Game";
            gameresult.style.color = "red"
            submit.disabled = true;
        }
        console.log(attemts)
        if(guess>randomnum){
            hint.innerText = "HINT : - You Guessed too High";
        }
        else{
            hint.innerText = "HINT : - You Guessed too Low";
        }
    }
})

    resetbtn.addEventListener("click", function(){
    randomnum = Math.ceil(Math.random()*50);
    attemts = 7;
    attemtsrem.innerText = "Attempts Remaining : "+ attemts;
    userinput.value = "";
    gamehint.innerText ="Hint : -";
    gameresult.innerHTML = "";
    submit.disabled = false;

})



