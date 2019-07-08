var countries = [
                    { name : "australia", flag : "assets/images/australia.png"},
                    { name : "canada", flag : "assets/images/canada.png"},
                    { name : "china", flag : "assets/images/china.png"}, 
                    { name : "south korea", flag : "assets/images/korea.png"},
                    { name : "mexico", flag : "assets/images/mexico.png"},
                    { name : "philippines", flag : "assets/images/philippines.png"},
                    { name : "united kingdom", flag : "assets/images/united-kingdom.png"},
                ],
    guessWordContainer = document.getElementById('guess-the-letters'),
    winCounter = document.getElementById('win-count'),
    guessCounter = document.getElementById('guess-left'),
    typedLetters = document.getElementById('typed-letters'),
    greenAlert = document.getElementById('green-box'),
    redAlert = document.getElementById('red-box'),
    rightLetters = [],
    
    //default values
    winPoint = 0,
    guessesLeft = 10;

    //counter labels with its default values
    winCounter.textContent = Number(winPoint);
    guessCounter.textContent = Number(guessesLeft);

    
//hides the alert box by default
$('#green-box').hide();
$('#red-box').hide();


//a function that generates a word from the countries array
function generateWord(){
    var index = Math.floor(Math.random() * countries.length);
    
    //generates through the flag image
    document.getElementById('image-container').innerHTML = "<img src=\"" + countries[index].flag + "\">";

    return countries[index].name;
}    

var newCountry = generateWord();

//a function that starts the game but...
function start(){
    //once the game starts, the words will be replaced with underscores
    for(let x = 0; x < newCountry.length; x++){
        rightLetters[x] = " _ ";

        if(newCountry[x] == " "){ 
            rightLetters[x] = '-';
        }
    }
    guessWordContainer.innerHTML = rightLetters.join(' ').toString().replace("-", '&nbsp;');
}

start();

//a function that restarts the game
function restartUserStat(){
    guessesLeft = 10;
    typedLetters.innerHTML = "";
    guessCounter.textContent = Number(guessesLeft);
}


document.onkeypress = function(e){
//hides the alert box when any key is pressed when the game restarts
$('#green-box').hide();
$('#red-box').hide();

    //a conditional statement that checks if the keyCode a letter or not
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
        
        //a variable that converts the keyCode number to its string value
        var keyPressed = String.fromCharCode(e.keyCode).toLowerCase();
        
        //a loop to change the underscores with the right letters
        for(var i = 0; i < newCountry.length; i++){

            //if the pressed letter matches one of the letters
            if(keyPressed == newCountry[i]){
                rightLetters[i] = keyPressed;
                var checkLetters = rightLetters[i];
                guessWordContainer.innerHTML = rightLetters.join(' ').replace('-', "&nbsp;");
            }
        }   

        //if the letters matched the missing ones
        if(checkLetters == keyPressed){
            //NOTE: every matched letter will not lose a guess counter

            if(newCountry == rightLetters.join("").toString()){

                //an alert-success box will appear with a string that shows achievement
                $('#green-box').show();
                greenAlert.textContent = "You got it!";
                winPoint+=1;
                winCounter.textContent = Number(winPoint);
                
            }

        }else{

            //user can see the wrong letters
            if(typedLetters.innerHTML.match(keyPressed)){
                console.log("already pressed")
                $('#red-box').show();
                redAlert.textContent = "You already pressed it.";
            }else{
                //guess counter will keep on decrementing
                guessesLeft--;
                guessCounter.textContent = guessesLeft;
                typedLetters.innerHTML += e.key.toLowerCase()  + ", ";
            }
            
            //if the user has no more guesses left
            if(guessesLeft == 0){

                //an alert-danger box will appear with a string that shows the correct letter
                $('#red-box').show();
                redAlert.textContent = "You lost!";
            
            }
        }

//alert box will appear when the user pressed an invalid key
    }else{
        console.log("Not a letter");
         //an alert-danger box will appear with a string
         $('#red-box').show();
         redAlert.textContent = "Letters Only";
    }
} //end of onkeypress
