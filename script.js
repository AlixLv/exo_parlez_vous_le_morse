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
//A,B,C, etc sont les clés associées à des valeurs, ou key value, de l'objet latinToMorse.

function getLatinCharacterList(texte) {
    const helloTable = texte.split("");
    return helloTable;
}

const helloWorld = getLatinCharacterList("Hello World");
console.log(helloWorld);
//console.log(getLatinCharacterList("Hello, world"));

function translateLatinCharacter(lettre) {
    return latinToMorse[lettre];
}

const traduction = translateLatinCharacter("A");
console.log(traduction);
