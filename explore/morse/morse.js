"use strict";

// Code for encoding and decoding with morse
let morse = {
  encode(message, codes, skip = false, caseSensitive = false) {
    let output = "";
    for (let letter of message) {

      if (letter == " ") {
        output += "  ";
        continue;
      }

      let encoded = "";

      for (let code of codes.slice().reverse()) {
        if (caseSensitive) {
          if (letter == code[1]) {
            encoded = code[0];
            break;
          }
        } else {
          if (letter.toLowerCase() == code[1].toLowerCase()) {
            encoded = code[0];
            break;
          }
        }
      }

      if (encoded == "") {
        if (!skip) {
          output += letter;
          output += " ";
        }
        continue;
      }

      output += encoded;
      output += " ";
    }

    return output;
  },

  decode(message, codes, skip = false) {
    let output = "";
    for (let letter of message.split(" ")) {

      if (letter == "") {
        output += " ";
        continue;
      }

      let decoded = "";

      for (let code of codes.slice().reverse()) {
        if (letter == code[0]) {
          decoded = code[1];
          break;
        }
      }

      if (decoded == "") {
        if (!skip) {
          output += letter;
        }
        continue;
      }

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
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>letter <span class="keyword">of </span>message) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span><span class="string">" "</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">"&nbsp;&nbsp;"</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>encoded<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>codeword <span class="keyword">of </span>codewords) {</span>',
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
  '<span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>letter <span class="keyword">of </span>message.<span class="function">split</span>(<span class="string">" "</span>)) {</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">if<span class="function"> </span></span>(letter<span class="keyword"> =</span><span class="keyword">= </span><span class="string">""</span>) {</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">output <span class="keyword">+</span><span class="keyword">= </span><span class="string">" "</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">continue</span>;</span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line">}</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">let </span>decoded<span class="keyword"> =</span> <span class="string">""</span>;</span>',
  ' <span class="code-line"></span>',
  '<span class="indent"></span><span class="indent"></span><span class="indent"></span> <span class="code-line"><span class="keyword">for<span class="function"> </span></span>(<span class="keyword">let </span>codeword <span class="keyword">of </span>codewords) {</span>',
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
  [0, 1, 33, 34, 68, 65, 66],
  [0, 1, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 17, 18, 19, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66],

];

let originalCodes = [
  ["•–", "A"],
  ["–•••", "B"],
  ["–•–•", "C"],
  ["–••", "D"],
  ["•", "E"],
  ["••–•", "F"],
  ["––•", "G"],
  ["••••", "H"],
  ["••", "I"],
  ["•–––", "J"],
  ["–•–", "K"],
  ["•–••", "L"],
  ["––", "M"],
  ["–•", "N"],
  ["–––", "O"],
  ["•––•", "P"],
  ["––•–", "Q"],
  ["•–•", "R"],
  ["•••", "S"],
  ["–", "T"],
  ["••–", "U"],
  ["•••–", "V"],
  ["•––", "W"],
  ["–••–", "X"],
  ["–•––", "Y"],
  ["––••", "Z"],
  ["•–•–", "Ä"],
  ["–––•", "Ö"],
  ["••––", "Ü"],
  ["•••––••", "ß"],
  ["•––––", "1"],
  ["••–––", "2"],
  ["•••––", "3"],
  ["••••–", "4"],
  ["•••••", "5"],
  ["–••••", "6"],
  ["––•••", "7"],
  ["–––••", "8"],
  ["––––•", "9"],
  ["–––––", "0"],
  ["•–•–•–", "."],
  ["––••––", ","],
  ["–––•••", ":"],
  ["–•–•–•", ";"],
  ["–••••–", "-"],
  ["••––••", "?"],
  ["–•–•––", "!"]
];
// Codes that may be modified by the user
let codes;

// Important dom elements
let testInput = document.getElementById("test-input");
let testOutput = document.getElementById("test-output");
let listWrapper = document.getElementById("list-wrapper");
let direction = document.getElementById("encrypt");

let directionIconLock = document.getElementById("direction-icon-lock");
let directionIconUnlock = document.getElementById("direction-icon-unlock");

let caseSensitive = document.getElementById("case-sensitive");

// Initialising UI state
// Improvement: restore modified codes after reload
resetCodes();
testDirectionChanged();

function codesChanged(changedElemenent) {
  let index = +changedElemenent.id;
  listWrapper.children[index].children[0].value = sanitizeInput(listWrapper.children[index].children[0].value, true);
  codes[index][0] = listWrapper.children[index].children[0].value;
  codes[index][1] = listWrapper.children[index].children[1].value;

  checkDuplicates();
  testInputChanged();
}

function deleteCode(buttonElement) {
  let index = buttonElement.id;
  codes.splice(index, 1);
  listWrapper.children[index].remove();
  // Update ids to match new order
  for (let i = index; i < listWrapper.children.length; i++) {
    let button = listWrapper.children[i].getElementsByTagName("button")[0];
    button.id -= 1;

    let inputs = listWrapper.children[i].getElementsByTagName("input");
    for (let input of inputs) {
      input.id -= 1;
    }
  }

  checkDuplicates();
  testInputChanged();
}

function addCode() {
  codes.push(["•", "e"]);
  let newElement = document.createElement("div");
  newElement.classList.add("codeword-element");
  newElement.innerHTML = `
    <input type="text" value="${codes[codes.length - 1][0]}" id="${codes.length - 1}" oninput="codesChanged(this)" />
    &rarr;
    <input type="text" value="${codes[codes.length - 1][1]}" id="${codes.length - 1}" oninput="codesChanged(this)" />
    <button onclick="deleteCode(this)" id="${codes.length - 1}"><img src="../../icons/trash-2.svg" alt="Löschen" /></button>
  `;
  listWrapper.appendChild(newElement);
  checkDuplicates();

  testInputChanged();
}

// Make the user aware of possible problems in the codes
function checkDuplicates() {
  for (let i = 0; i < codes.length - 1; i++) {
    listWrapper.children[i].classList.remove("duplicate");
    let codeToCheck = codes[i];

    for (let j = i + 1; j < codes.length; j++) {
      if (codeToCheck[0] == codes[j][0]) {
        listWrapper.children[i].classList.add("duplicate");
      }
      if (codeToCheck[1] == codes[j][1]) {
        listWrapper.children[i].classList.add("duplicate");
      }
    }
  }
}

function resetCodes() {
  codes = [];

  listWrapper.innerHTML = "";

  for (let i = 0; i < originalCodes.length; i++) {
    let code = originalCodes[i]
    let newCode = [];
    for (let elem of code) {
      newCode.push(elem);
    }
    codes.push(newCode);
    listWrapper.innerHTML += `
      <div class="codeword-element">
        <input type="text" value="${newCode[0]}" id=${i} oninput="codesChanged(this)" />
        &rarr;
        <input type="text" value="${newCode[1]}" id=${i} oninput="codesChanged(this)" />
        <button onclick="deleteCode(this)" id=${i}><img src="../../icons/trash-2.svg" alt="Löschen" /></button
      </div>
    `;
  }

  testInputChanged();
}

// Makes sure the morse code uses only allowed symbols
// and standardises input
function sanitizeInput(input, skip) {
  input = input.replace(/\*/gm, "•");
  input = input.replace(/-/gm, "–");
  input = input.replace(/—/gm, "––");
  input = input.replace(/l/gm, "–");
  input = input.replace(/k/gm, "•");

  if (skip) {
    input = input.replace(/[^–•]+/gm, "");
  }

  return input;
}

function testInputChanged() {
  let inputMessage = testInput.value;
  if (!direction.checked) {
    inputMessage = sanitizeInput(inputMessage, false);

    testInput.value = inputMessage;
  }

  let outputMessage;
  if (direction.checked) {
    outputMessage = morse.encode(inputMessage, codes, false, caseSensitive.checked);
  } else {
    outputMessage = morse.decode(inputMessage, codes);
  }
  testOutput.value = outputMessage;
}

function testDirectionChanged() {
  if (direction.checked) {
    directionIconLock.style.display = "block";
    directionIconUnlock.style.display = "none";
    testOutput.placeholder = "Hier steht dann der codierte Text."
    testInput.placeholder = "Gib hier einen Text ein.";
  } else {
    directionIconLock.style.display = "none";
    directionIconUnlock.style.display = "block";
    testOutput.placeholder = "Hier steht dann der decodierte Text."
    testInput.placeholder = "Gib hier einen Text ein. (Verwende k oder * für kurze Signale, bzw. l oder - für lange Signale)";
  }

  testInputChanged();
}
