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
    const createTable = texte.split("");
    return createTable;
}


function translateLatinCharacter(helloWorld) {
    const resultat = [];
    for (i = 0; i < helloWorld.length; i++) {
        resultat.push(latinToMorse[helloWorld[i]]);
    }
    return resultat;
}

function encode(texte) {
    let helloWorld = getLatinCharacterList(texte);
    console.log(helloWorld);
    let traduction = translateLatinCharacter(helloWorld);
    console.log(traduction);
}

encode("BONJOUR");

function getMorseCharacterList(texte) {
    const morseWord = texte.split(" ");
    return morseWord;
}

const separationMorse = getMorseCharacterList("- --- -- .- - .");
console.log(separationMorse);

function translateMorseCharacter(mot) {
    const morseTable = [];
    for (i = 0; i < mot.length; i++) {
        resultat.push(morseToLatin[mot[i]]);
    }
    return morseTable;
}

const tradMorse = translateMorseCharacter("- --- -- .- - .");
console.log(tradMorse);