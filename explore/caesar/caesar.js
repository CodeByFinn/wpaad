"use strict";

// Code for encrypting and decrypting with the caesar cipher
let caesar = {
  checkKey(key, alphabet) {
    if (!Number.isInteger(key)) {
      throw "Schlüssel ist kein Integer";
    }

    key = Math.min(alphabet.length - 1, key);
    key = Math.max(1, key);

    return key;
  },

  encrypt(message, key, alphabet = "abcdefghijklmnopqrstuvwxyz", skip = false) {
    key = this.checkKey(key, alphabet);

    let output = "";

    for (let letter of message) {

      let index = alphabet.indexOf(letter);

      if (index == -1) {
        if (!skip) {
          output += letter;
        }
        continue;
      }

      index += key;
      index %= alphabet.length;

      output += alphabet[index];

    }

    return output;
  },

  decrypt(message, key, alphabet = "abcdefghijklmnopqrstuvwxyz", skip = false) {
    key = this.checkKey(key, alphabet);

    let output = "";

    for (let letter of message) {

      let index = alphabet.indexOf(letter);

      if (index == -1) {
        if (!skip) {
          output += letter;
        }
        continue;
      }

      index -= key;
      if (index < 0) {
        index = alphabet.length + index;
      }

      output += alphabet[index];

    }

    return output;
  }
}
// Code for the animated code tutorial
let codeLines = [
  ' <span class="code-line"><span class="keyword">let </span>caesar<span class="keyword"> =</span> {</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> checkKey</span>(key, alphabet) {</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(<span class="keyword">!</span>Number.<span class="function">isInteger</span>(key)) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">throw </span><span class="string">"Schlüssel ist kein Integer"</span>;</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">key<span class="keyword"> =</span> Math.<span class="function">min</span>(alphabet.length <span class="keyword">-</span> <span class="number">1</span>, key);</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">key<span class="keyword"> =</span> Math.<span class="function">max</span>(<span class="number">1</span>, key);</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>key;</span>',
  '<span class="indent"></span> <span class="code-line">},</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> encrypt</span>(message, key, alphabet<span class="keyword"> =</span> <span class="string">"abcdefghijklmnopqrstuvwxyz"</span>, skip<span class="keyword"> =</span> <span class="bool">false</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">key<span class="keyword"> =</span> this.<span class="function">checkKey</span>(key, alphabet);</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>output<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>letter <span class="keyword">of </span>message) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>index<span class="keyword"> =</span> alphabet.<span class="function">indexOf</span>(letter);</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(index<span class="keyword"> =</span><span class="keyword">= </span><span class="keyword">-</span><span class="number">1</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(<span class="keyword">!</span>skip) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>letter;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">+</span><span class="keyword">= </span>key;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">%</span><span class="keyword">= </span>alphabet.length;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>alphabet[index];</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>output;</span>',
  '<span class="indent"></span> <span class="code-line">},</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> decrypt</span>(message, key, alphabet<span class="keyword"> =</span> <span class="string">"abcdefghijklmnopqrstuvwxyz"</span>, skip<span class="keyword"> =</span> <span class="bool">false</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">key<span class="keyword"> =</span> this.<span class="function">checkKey</span>(key, alphabet);</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>output<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>letter <span class="keyword">of </span>message) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>index<span class="keyword"> =</span> alphabet.<span class="function">indexOf</span>(letter);</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(index<span class="keyword"> =</span><span class="keyword">= </span><span class="keyword">-</span><span class="number">1</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(<span class="keyword">!</span>skip) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>letter;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">-</span><span class="keyword">= </span>key;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(index < <span class="number">0</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index<span class="keyword"> =</span> alphabet.length <span class="keyword">-</span> index;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>alphabet[index];</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>output;</span>',
  '<span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line">}</span>',

  '<span class="indent"></span> <span class="code-line"> <span class="function"> checkKey</span>() {</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> encrypt</span>() {</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> decrypt</span>() {</span>',

];
let instructions = [
  [],
  [0, 65],
  [0, 66, 10, 11, 67, 36, 37, 68, 64, 65],
  [0, 66, 10, 11, 12, 36, 37, 68, 64, 65],
  [0, 66, 10, 11, 12, 36, 37, 38, 64, 65],
  [0, 1, 10, 11, 12, 36, 37, 38, 64, 65],
  [0, 1, 2, 3, 4, 10, 11, 12, 36, 37, 38, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 36, 37, 38, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 36, 37, 38, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 35, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 33, 34, 35, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 58, 59, 60, 61, 62, 63, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 58, 59, 60, 61, 62, 63, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
];

// Important dom elements
let testOutput = document.getElementById("test-output");
let testInput = document.getElementById("test-input");
let alphabetValue = document.getElementById("alphabet-value");
let direction = document.getElementById("encrypt");
let keyLabel = document.getElementById("key-label");

// If key is recovered by the browser after reload, check that it's still valid
let lastKey;
try {
  lastKey = caesar.checkKey(+keyLabel.value, alphabetValue.value);
  keyLabel.value = lastKey;
} catch {
  lastKey = 3;
}

let directionIconLock = document.getElementById("direction-icon-lock");
let directionIconUnlock = document.getElementById("direction-icon-unlock");

// Initialise UI state
testDirectionChanged();

// Text element describing how the key affects the first letter of the alphabet
let phraseLetterObjects = [
  document.getElementById("plain-text-test"),
  document.getElementById("cipher-text-test")
];
changePhrase();



// Initialise frequency analysis
let analysisInput = document.getElementById("analysis-input");
frequencyChanged(analysisInput.value);


function testDirectionChanged() {
  if (direction.checked) {
    directionIconLock.style.display = "block";
    directionIconUnlock.style.display = "none";
    testOutput.placeholder = "Hier steht dann der verschlüsselte Text."
  } else {
    directionIconLock.style.display = "none";
    directionIconUnlock.style.display = "block";
    testOutput.placeholder = "Hier steht dann der entschlüsselte Text."
  }

  testInputChanged();
}

function testInputChanged() {
  let outputMessage;
  if (direction.checked) {
    outputMessage = caesar.encrypt(testInput.value, +keyLabel.value, alphabetValue.value);
  } else {
    outputMessage = caesar.decrypt(testInput.value, +keyLabel.value, alphabetValue.value);
  }
  testOutput.value = outputMessage;
}

function testAlphabetChanged() {
  // Make sure key is still valid after changing the alphabet
  try {
    let newKey = caesar.checkKey(+keyLabel.value, alphabetValue.value);
    lastKey = newKey;
    keyLabel.value = newKey;
  } catch (e) {
    keyLabel.value = 1;
  }
  testInputChanged();
  changePhrase();
}

function testKeyChanged() {
  try {
    let newKey = caesar.checkKey(+keyLabel.value, alphabetValue.value);
    keyLabel.value = newKey;
    lastKey = newKey;
    testInputChanged();

    changePhrase();
  } catch (e) {
    keyLabel.value = lastKey;
  }
}

function changePhrase() {
  let firstLetter = alphabetValue.value[0];
  // If the alphabet is empty
  if (firstLetter === undefined) {
    firstLetter = "...";
  }
  phraseLetterObjects[0].innerHTML = firstLetter;
  phraseLetterObjects[1].innerHTML = caesar.encrypt(firstLetter, +keyLabel.value, alphabetValue.value);
}

function decreaseKey() {
  if (+keyLabel.value > 1) {
    keyLabel.value -= 1;
    testKeyChanged();
  }
}
function increaseKey() {
  if (+keyLabel.value < alphabetValue.value.length - 1) {
    keyLabel.value = +keyLabel.value + 1;
    testKeyChanged();
  }
}

function frequencyChanged(msg) {
  let frequencies = calculateFrequency(msg);
  updateUI(frequencies);
}
