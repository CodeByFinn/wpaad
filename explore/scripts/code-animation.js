"use strict";

let codeContainer = document.getElementById("code-container");
let instructionContainer = document.getElementById("instruction-container");

// Initialise to first instruction
let currentInstruction = 1;
updateCode(1);
highlightInstruction(1);

document.addEventListener("scroll", function(e) {
  let windowScroll = window.scrollY;

  // Calculate positions of instructions
  // Doing this each scroll, because the positions can vary, depending on which accordions are opened
  let instructionPositions = [];
  for (let i = 0; i < instructionContainer.children.length; i++) {
    instructionPositions[i] = instructionContainer.children[i].getBoundingClientRect().top + windowScroll - window.innerHeight / 2 + 100;
  }

  let newInstruction = currentInstruction;

  for (let i = instructionPositions.length - 1; i >= 0; i--) {
    if (windowScroll > instructionPositions[i]) {
      newInstruction = i + 1
      break;
    }
  }

  if (currentInstruction != newInstruction) {
    updateCode(newInstruction);
    highlightInstruction(newInstruction)

    currentInstruction = newInstruction;
  }
});

function updateCode(index) {
  // Reset container and redraw every line - possible improvement
  codeContainer.innerHTML = "";

  let newLineFound = false;
  let firstNewLine = 0;

  for (let i = 0; i < instructions[index].length; i++) {
    if (instructions[index - 1].includes(instructions[index][i])) {
      codeContainer.innerHTML += `
        <div class="line">
          <span class="line-number">${i+1}</span>
          <span class="complete-line">
            ${codeLines[instructions[index][i]]}
          </span>
        </div>
      `;
    } else {
      if (!newLineFound) {
        // Save first new line, to be able to scroll to it further on
        firstNewLine = i + 1;
        newLineFound = true;
      }

      codeContainer.innerHTML += `
        <div class="line">
          <span class="line-number highlighted-line">${i+1}</span>
          <span class="complete-line">
            ${codeLines[instructions[index][i]]}
          </span>
        </div>
      `;
    }
  }

  // firstNewLine - 3 to provide some context, two lines before new line are visible
  codeContainer.scrollTo(0, (firstNewLine-3) * 32);
}

function highlightInstruction(index) {
  for (let i = 0; i < instructionContainer.children.length; i++) {
    instructionContainer.children[i].classList.remove("highlighted-instruction");
  }

  instructionContainer.children[index - 1].classList.add("highlighted-instruction");
}

// Add mobile version of code tutorial
if (document.getElementById("mobile-instructions")) {
  addMobile();
}

// Ability to click on instructions, 
// only added after mobile instructions, to prevent this behaviour on mobile
for (let i = 0; i < instructionContainer.children.length; i++) {
  instructionContainer.addEventListener("click", function(event) {
    window.scrollTo(window.scrollX, event.target.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + 110);
  });
}

function addMobile() {
  let mobileInstructions = document.getElementById("mobile-instructions");
  mobileInstructions.innerHTML = "";

  for (let instruction = 0; instruction < instructionContainer.children.length; instruction++) {
    let copiedInstruction = instructionContainer.children[instruction].cloneNode(true);
    copiedInstruction.classList.remove("highlighted-instruction");
    mobileInstructions.appendChild(copiedInstruction);

    let codeContainer = document.createElement("div");
    codeContainer.classList.add("code-container");

    // Code has an empty array at index 0, which we don't want in mobile
    let codeInstruction = instruction + 1;
    let instructionLines = instructions[codeInstruction];

    // Saving indexes to be able to provide context later
    let firstNewLine = -1;
    let lastNewLine = instructionLines.length - 1;

    let newInnerHTML = "";

    for (let codeLine = 0; codeLine < instructionLines.length; codeLine++) {
      if (!instructions[instruction].includes(instructionLines[codeLine])) {
        if (firstNewLine < 0) {
          firstNewLine = codeLine;
        }
        lastNewLine = codeLine;
        newInnerHTML += `
          <div class="line">
            <span class="line-number highlighted-line">${codeLine+1}</span>
            <span class="complete-line">
              ${codeLines[instructionLines[codeLine]]}
            </span>
          </div>
        `;
      }
    }

    // Providing context, if there is some to show - could be improved
    if (firstNewLine > 0) {
      newInnerHTML = `
        <div class="line">
          <span class="line-number">${firstNewLine}</span>
          <span class="complete-line">
            ${codeLines[instructionLines[firstNewLine - 1]]}
          </span>
        </div>
      ` + newInnerHTML;
    }
    if (firstNewLine > 1) {
      newInnerHTML = `
        <div class="line">
          <span class="line-number">${firstNewLine - 1}</span>
          <span class="complete-line">
            ${codeLines[instructionLines[firstNewLine - 2]]}
          </span>
        </div>
      ` + newInnerHTML;
    }

    if (lastNewLine < instructionLines.length - 1) {
      newInnerHTML += `
        <div class="line">
          <span class="line-number">${lastNewLine + 2}</span>
          <span class="complete-line">
            ${codeLines[instructionLines[lastNewLine + 1]]}
          </span>
        </div>
      `;
    }
    if (lastNewLine < instructionLines.length - 2) {
      newInnerHTML += `
        <div class="line">
          <span class="line-number">${lastNewLine + 3}</span>
          <span class="complete-line">
            ${codeLines[instructionLines[lastNewLine + 2]]}
          </span>
        </div>
      `;
    }

    // If there's no new content, we don't show it in mobile
    if (newInnerHTML != "") {
      codeContainer.innerHTML = newInnerHTML;

      mobileInstructions.appendChild(codeContainer);
    }
  }
}
