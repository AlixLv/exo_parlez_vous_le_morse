const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

function getLatinCharacterList(texte) {
    let separationLatin = texte.split("");
    return separationLatin;
}


function translateLatinCharacter(mot) {
    const helloWorld = getLatinCharacterList(mot.toUpperCase());
    console.log(helloWorld);
    const latinTable = [];
    for (i = 0; i < helloWorld.length; i++) {
        if (helloWorld[i] == " ") {
            latinTable.push("/");
        }
        else if (helloWorld[i] in latinToMorse)
            latinTable.push(latinToMorse[helloWorld[i]]);
    }
    return latinTable;
}

//gérer les espaces entre chaque lettre
//join le mot total à la fin

const traduction = translateLatinCharacter("Bonjour Moussa");
console.log(traduction);





function getMorseCharacterList(texte) {
    const morseWord = texte.split(" ");
    return morseWord;
}


function translateMorseCharacter(mot) {
    const separationMorse = getMorseCharacterList(mot);
    console.log(separationMorse);
    const morseTable = [];
    for (i = 0; i < separationMorse.length; i++) {
        if (separationMorse[i] == "/") {
            morseTable.push("/");
        }
        else if (separationMorse[i] in morseToLatin) {
            morseTable.push(morseToLatin[separationMorse[i]]);
        }
    }
    return morseTable;
}

const tradMorse = translateMorseCharacter("... .- .-.. ..- -  / .-.. . ...  / -.-. --- .--. .- .. -. ...");
console.log(tradMorse);