"use strict";

// Code for encoding and decoding with ascii
let ascii = {
  encode(message, skip = false) {
    let output = "";
    for (letter of message) {
      let unicodeIndex = letter.codePointAt(0);

      if (unicodeIndex <= 127) {
        let binary = unicodeIndex.toString(2);
        while (binary.length < 7) {
          binary = "0" + binary;
        }
        output += binary;
        output += " ";
        continue;
      }

      if (!skip) {
        output += letter;
        output += " ";
      }
    }

    return output;
  },

  decode(message, skip = false) {
    let output = "";
    for (letter of message.split(" ")) {
      if (letter == "") {
        output += " ";
      }
      if (!letter.match(/[01]{7}/gm) || letter.length != 7) {
        output += letter;
        continue;
      }

      let asciiInt = parseInt(letter, 2);
      let decoded = String.fromCodePoint(asciiInt);
      output += decoded;
    }

    return output;
  }
};
// Code for the animated code tutorial
let codeLines = [
  ' <span class="code-line"><span class="keyword">let </span>morse<span class="keyword"> =</span> {</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> encode</span>(message, codewords, skip<span class="keyword"> =</span> <span class="bool">false</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>output<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(letter <span class="keyword">of </span>message) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span><span class="string">" "</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">""</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>encoded<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(codeword <span class="keyword">of </span>codewords) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span>codeword[<span class="number">1</span>]) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">encoded<span class="keyword"> =</span> codeword[<span class="number">0</span>];</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">break;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(encoded<span class="keyword"> =</span><span class="keyword">= </span><span class="string">""</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(<span class="keyword">!</span>skip) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>letter;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>encoded;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>output;</span>',
  '<span class="indent"></span> <span class="code-line">},</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> decode</span>(message, codewords, skip<span class="keyword"> =</span> <span class="bool">false</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>output<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(letter <span class="keyword">of </span>message.<span class="function">split</span>(<span class="string">" "</span>)) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span><span class="string">""</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>decoded<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(codeword <span class="keyword">of </span>codewords) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span>codewordword[<span class="number">0</span>]) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">decoded<span class="keyword"> =</span> code[<span class="number">1</span>];</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">break;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(decoded<span class="keyword"> =</span><span class="keyword">= </span><span class="string">""</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(<span class="keyword">!</span>skip) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>letter;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span>decoded;</span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">return </span>output;</span>',
  '<span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line">};</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> encode</span>() {</span>',
  '<span class="indent"></span> <span class="code-line"> <span class="function"> decode</span>() {</span>',
];
let instructions = [
  [],
  [0, 66],
  [0, 67, 33, 34, 68, 65, 66],
  [0, 1, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 17, 18, 19, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66],

];

// Important dom-elements
let testInput = document.getElementById("test-input");
let testOutput = document.getElementById("test-output");
let direction = document.getElementById("encrypt");

let directionIconLock = document.getElementById("direction-icon-lock");
let directionIconUnlock = document.getElementById("direction-icon-unlock");

// Initialise UI state
testDirectionChanged();

function testInputChanged() {
  let inputMessage = testInput.value;

  let outputMessage;
  if (direction.checked) {
    outputMessage = ascii.encode(inputMessage);
  } else {
    outputMessage = ascii.decode(inputMessage);
  }
  testOutput.value = outputMessage;
}

function testDirectionChanged() {
  if (direction.checked) {
    directionIconLock.style.display = "block";
    directionIconUnlock.style.display = "none";
    testOutput.placeholder = "Hier steht dann der codierte Text.";
  } else {
    directionIconLock.style.display = "none";
    directionIconUnlock.style.display = "block";
    testOutput.placeholder = "Hier steht dann der decodierte Text.";
  }

  testInputChanged();
}
