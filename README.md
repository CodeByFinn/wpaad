# kryptologie
A website about cryptography

## Possible cyphers
* Caesar Cypher
* Vigenere

## Caesar Cypher
```javascript
"use strict";

let klartext = "HALLO, DAS IST EIN TEST";
let schluessel = 2;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let ergebnis = verschluesselnCaesar(klartext, schluessel, alphabet);
console.log(ergebnis);

function verschluesselnCaesar(klartext, schluessel, alphabet) {
  let output = "";

  for (let zeichen of klartext) {

    let index = alphabet.indexOf(zeichen);

    if (index == -1) {
      output += zeichen;
      continue;
    }

    index += schluessel;
    index %= alphabet.length;

    output += alphabet[index];

  }

  return output;
}
```
