//famous artist list
const masterArtistNames=
    [
        'edgar degas',
        'edward hopper',
        'claude monet',
        'edouard manet',
        'salvador dali',
        'henri matisse',
        'frida kahlo',
        'pablo picasso',
        'vincent van gough',
        'andy warhol',
        'mary cassatt',
        'yayoi kusama'
    ];

// maximum number of tries you can play
const maximumTries = 15;

// gabby this is your object don't forget it okay
var wordGuessGame = {
    artistNames: masterArtistNames,
    guessWord: [],
    lettersGuessed: [],
    currentWord: "",
    wins: 0,
    maxTries: maximumTries,
    remainingGuesses: 0,
    playerDone: true,

// reset game variables
resetGame: function () {
    this.currentWord = this.artistNames[Math.floor(Math.random() * this.artistNames.length)]

    
}

}

wordGuessGame.resetGame();
console.log(wordGuessGame);
