"use strict";

// Code for encrypting and decrypting with vigenere cipher
let vigenere = {
  checkKey(key, alphabet) {
    let newKey = "";

    for (let letter of key) {
      if (alphabet.includes(letter)) {
        newKey += letter;
      }
    }
    return newKey;
  },

  encrypt(message, key, alphabet = "abcdefghijklmnopqrstuvwxyz", skip = false) {
    key = this.checkKey(key, alphabet);

    let output = "";

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];

      if (letter.match(/\s/gm)) {
        output += " ";
        continue;
      }

      let index = alphabet.indexOf(letter);

      if (index == -1) {
        if (!skip) {
          output += letter;
        }
        continue;
      }

      let shift = alphabet.indexOf(key[keyIndex % key.length]);
      index += shift;
      index %= alphabet.length;

      keyIndex++;

      output += alphabet[index];

    }

    return output;
  },

  decrypt(message, key, alphabet = "abcdefghijklmnopqrstuvwxyz", skip = false) {
    key = this.checkKey(key, alphabet);

    let output = "";

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];

      if (letter.match(/\s/gm)) {
        output += " ";
        continue;
      }

      let index = alphabet.indexOf(letter);

      if (index == -1) {
        if (!skip) {
          output += letter;
        }
        continue;
      }

      let shift = alphabet.indexOf(key[keyIndex % key.length]);
      index -= shift;
      if (index < 0) {
        index = alphabet.length + index;
      }

      keyIndex++;

      output += alphabet[index];

    }

    return output;
  }
}
// Code for animated code tutorial
let codeLines = [
  ' <span class="code-line"><span class="keyword">let </span>vigenere<span class="keyword"> =</span> {</span>',
'<span class="indent"></span> <span class="code-line"> <span class="function"> checkKey</span>(key, alphabet) {</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>newKey<span class="keyword"> =</span> <span class="string">""</span>;</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>letter <span class="keyword">of </span>key) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(alphabet.<span class="function">includes</span>(letter)) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">newKey <span class="keyword">+</span><span class="keyword">= </span>letter;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>newKey;</span>',
'<span class="indent"></span> <span class="code-line">},</span>',
' <span class="code-line"></span>',
'<span class="indent"></span> <span class="code-line"> <span class="function"> encrypt</span>(message, key, alphabet<span class="keyword"> =</span> <span class="string">"abcdefghijklmnopqrstuvwxyz"</span>, skip<span class="keyword"> =</span> <span class="bool">false</span>) {</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line">key<span class="keyword"> =</span> this.<span class="function">checkKey</span>(key, alphabet);</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>output<span class="keyword"> =</span> <span class="string">""</span>;</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>keyIndex<span class="keyword"> =</span> <span class="number">0</span>;</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>i<span class="keyword"> =</span> <span class="number">0</span>; i < message.length; i<span class="keyword">+</span><span class="keyword">+</span>) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>letter<span class="keyword"> =</span> message[i];</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter.<span class="function">match</span>(/s/gm)) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
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
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>shift<span class="keyword"> =</span> alphabet.<span class="function">indexOf</span>(key[keyIndex <span class="keyword">%</span> key.length]);</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">+</span><span class="keyword">= </span>shift;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">%</span><span class="keyword">= </span>alphabet.length;</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">keyIndex<span class="keyword">+</span><span class="keyword">+</span>;</span>',
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
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>keyIndex<span class="keyword"> =</span> <span class="number">0</span>;</span>',
'<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>i<span class="keyword"> =</span> <span class="number">0</span>; i < message.length; i<span class="keyword">+</span><span class="keyword">+</span>) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>letter<span class="keyword"> =</span> message[i];</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter.<span class="function">match</span>(/s/gm)) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
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
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>shift<span class="keyword"> =</span> alphabet.<span class="function">indexOf</span>(key[keyIndex <span class="keyword">%</span> key.length]);</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index <span class="keyword">-</span><span class="keyword">= </span>shift;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(index < <span class="number">0</span>) {</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">index<span class="keyword"> =</span> alphabet.length <span class="keyword">+</span> index;</span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
' <span class="code-line"></span>',
'<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">keyIndex<span class="keyword">+</span><span class="keyword">+</span>;</span>',
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
  [0, 85],
  [0, 86, 10, 11, 87, 46, 47, 88, 84, 85],
  [0, 1, 10, 11, 87, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 9, 10, 11, 87, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 87, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 39, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 88, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
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
  lastKey = vigenere.checkKey(keyLabel.value, alphabetValue.value);
  keyLabel.value = lastKey;
} catch {
  lastKey = "test";
}

let directionIconLock = document.getElementById("direction-icon-lock");
let directionIconUnlock = document.getElementById("direction-icon-unlock");

// Initialise UI state
testDirectionChanged();

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
    outputMessage = vigenere.encrypt(testInput.value, keyLabel.value, alphabetValue.value);
  } else {
    outputMessage = vigenere.decrypt(testInput.value, keyLabel.value, alphabetValue.value);
  }
  testOutput.value = outputMessage;
}

function testAlphabetChanged() {
  try {
    let newKey = vigenere.checkKey(keyLabel.value, alphabetValue.value);
    lastKey = newKey;
    keyLabel.value = newKey;
  } catch (e) {
    keyLabel.value = "test";
  }
  testInputChanged();
}

function testKeyChanged() {
  try {
    let newKey = vigenere.checkKey(keyLabel.value, alphabetValue.value);
    keyLabel.value = newKey;
    lastKey = newKey;
    testInputChanged();
  } catch (e) {
    keyLabel.value = lastKey;
  }
}
