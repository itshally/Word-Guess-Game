var words = [
                "dog", "bird", "turtle"
            ],
    guessWordContainer = document.getElementById('guess-the-letters'),
    winCounter = document.getElementById('win-count'),
    guessesLeft = document.getElementById('guess-left'),
    letterContainer = document.getElementById('pressed-letters');


//a function that generates word
function generateWord(){
    return words[Math.floor(Math.random() * words.length)];
}    

//a variable with a function
var newWord = generateWord();

//testing 
var userGuess = prompt('Type any letter to see if it matches any letter in a word');
console.log(newWord);

//testing match, includes, search methods
if(newWord.match(userGuess)){
    console.log("Code: 302");
}else{
    console.log("Code: 404");
}
