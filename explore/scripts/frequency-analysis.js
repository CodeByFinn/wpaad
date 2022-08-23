"use strict";

function calculateFrequency(msg) {
  let foundLetters = [];

  for (let letter of msg) {
    let found = false;

    for (let i = 0; i < foundLetters.length; i++) {
      if (letter == foundLetters[i][0]) {
        foundLetters[i][1] += 1;
        found = true;
        break;
      }
    }

    if (found) continue;

    foundLetters.push([letter, 1]);
  }

  // Sort by frequency
  foundLetters.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    return 0;
  });


  return foundLetters;
}

function updateUI(letterFrequency) {
  let statisticWrapper = document.getElementById("statistic-wrapper");
  statisticWrapper.innerHTML = "";

  if (letterFrequency.length == 0) {
    statisticWrapper.innerHTML = `
      <span class="info">Gibst du einen Text ein, wird hier die Statistik automatisch die
      Häufigkeiten anzeigen</span>
    `;
    return;
  }

  let greatestFrequency = letterFrequency[0][1];

  for (let letter of letterFrequency) {
    // Calculate height relative to the highest frequency
    let barHeight = letter[1]/greatestFrequency * 100;

    // Assign relative height and choose wether the bar is high enough
    // to display the text in the bar or to display it on top
    statisticWrapper.innerHTML += `
    <div class="data">
      <div class="bar" style="height: ${barHeight}px;"></div>
      <span ${barHeight < 30 ? 'class="top"' : ""}>${letter[1]}</span>
      <span>${letter[0] == " " ? "&blank;" : letter[0]}</span>
    </div>
    `
  }
}
