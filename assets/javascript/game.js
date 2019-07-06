var words = [
                "dog", "bird", "turtle"
            ],
    guessWordContainer = document.getElementById('guess-the-letters'),
    winCounter = document.getElementById('win-count'),
    guessCounter = document.getElementById('guess-left'),
    letterContainer = document.getElementById('pressed-letters'),
    
    winPoint = 0,
    guessesLeft = 10,
    lettersPressed = "";

    winCounter.textContent = Number(winPoint);
    guessCounter.textContent = Number(guessesLeft);


//a function that generates word
function generateWord(){
    return words[Math.floor(Math.random() * words.length)];
}    

//a variable with a function
var newWord = generateWord();

function restart(){
    guessesLeft = 10;
    lettersPressed.textContent = "";
    guessCounter.textContent = Number(guessCounter);
}

//testing 
console.log(newWord);

document.onkeypress = function(e){
     //a conditional statement that checks if the keyCode is for a letter or not
     if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){

        //a variable that converts the keyCode number to its string value
        var keyPressed = String.fromCharCode(e.keyCode).toLowerCase();

        if(newWord.match(keyPressed)){
            guessWordContainer.innerHTML += keyPressed;
        }

        letterContainer.innerHTML += e.key.toLowerCase() + ","; 
        console.log("LETTER: " + e.key);

    }else{
        console.log("NOT LETTER!!!");
    }
}