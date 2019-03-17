//famous artist list
var artistNameArray= [

    { word:'edgar degas',
      painting:'assets/images/edgar-degas.jpg'
    },
    
    { word:'edward hopper',
      painting:'assets/images/edward-hopper.jpg'
    },

    { word:'claude monet',
      painting:'assets/images/claude-monet.jpg'
    },

    { word:'edouard manet',
      painting:'assets/images/edouard-manet.jpg'
    },

    { word:'salvador dali',
      painting:'assets/images/salvador-dali.jpg'
    },

    { word:'henri matisse',
      painting: 'assets/images/henri-matisse.jpg'
    },

    { word:'frida kahlo',
      painting: 'assets/images/frida-kahlo.jpg'
    },

    { word:'pablo picasso',
      painting:'assets/images/pablo-picasso.jpg'
    },

    { word:'andy warhol',
      painting:'assets/images/andy-warhol.jpg'
    },

    { word:'mary cassatt',
      painting: 'assets/images/mary-cassatt.jpg'
    },

    { word:'yayoi kusama',
      painting: 'assets/images/yayoi-kusama.jpg'
    }]

var guessWord = artistNameArray[Math.floor(Math.random() * artistNameArray.length)];

for (i = 0; i < guessWord.word.length - 1; i++) {
    var wordBlanks = document.getElementById('banana');
    var blank = document.createElement('div');
    wordBlanks.appendChild(blank);
}

console.log(guessWord);


// // maximum number of tries you can play
// const maximumTries = 15;

// // gabby this is your object don't forget it okay
// var wordGuessGame = {
//     artistNames: masterArtistNames,
//     guessWord: [],
//     guessedLetters: [],
//     currentWord: "",
//     wins: 0,
//     maxTries: maximumTries,
//     remainingGuesses: 0,
//     playerDone: true,
