"use strict";

// If a textfield's content changed
function inputChanged(elem, cipher, dir) {
  // Run correct cipher and set output
  if (cipher == "morse") {
    let message = elem.value.replace(/[\u2026]/mgu, "\u002e\u002e\u002e").replace(/[\u2014]/mgu, "\u2212\u2212");
    let newMessage = morse(message.toLowerCase(), dir);

    let outputElem;
    if (dir) {
      outputElem = document.getElementById("cipher-text");
    } else {
      outputElem = document.getElementById("plain-text");
    }
    outputElem.value = newMessage;
  } else {
    let newMessage = caesar(elem.value, caesarKey, dir);

    let outputElem;
    if (dir) {
      outputElem = document.getElementById("cipher-text");
    } else {
      outputElem = document.getElementById("plain-text");
    }
    outputElem.value = newMessage;
  }
}

// Encodes and decodes with morse
function morse(message, direction) {
  let firstAlphabet = {
    a: "kl",
    b: "lkkk",
    c: "lklk",
    d: "lkk",
    e: "k",
    f: "kklk",
    g: "llk",
    h: "kkkk",
    i: "kk",
    j: "klll",
    k: "lkl",
    l: "klkk",
    m: "ll",
    n: "lk",
    o: "lll",
    p: "kllk",
    q: "llkl",
    r: "klk",
    s: "kkk",
    t: "l",
    u: "kkl",
    v: "kkkl",
    w: "kll",
    x: "lkkl",
    y: "lkll",
    z: "llkk"
  }
  let secondAlphabet = {
    "kl": "a",
    "lkkk": "b",
    "lklk": "c",
    "lkk": "d",
    "k": "e",
    "kklk": "f",
    "llk": "g",
    "kkkk": "h",
    "kk": "i",
    "klll": "j",
    "lkl": "k",
    "klll" : "j",
    "lkl" : "k",
    "klkk" : "l",
    "ll" : "m",
    "lk" : "n",
    "lll" : "o",
    "kllk" : "p",
    "llkl" : "q",
    "klk" : "r",
    "kkk" : "s",
    "l" : "t",
    "kkl" : "u",
    "kkkl" : "v",
    "kll" : "w",
    "lkkl" : "x",
    "lkll" : "y",
    "llkk" :"z"
  }

  if (!verifyInput(message, direction)) {
    let errorElem = document.getElementById("error-message");
    errorElem.innerHTML = "<p>Bitte verwende im Klatext nur Zeichen des lateinischen Alphabets und Leerzeichen und im Morsetext nur die oben angegebenen Zeichen.</p>"
    return "Fehler";
  } else {
    let errorElem = document.getElementById("error-message");
    errorElem.innerHTML = "";
  }

  let newMessage = algorithm(message, direction, direction ? firstAlphabet : secondAlphabet);

  return newMessage;

  function verifyInput(message, direction) {
    if (direction) {
      return !(/[^a-z\s]/gm).test(message);
    } else {
      return !(/[^\u2212\u2022\u002e\u002a\u005f\u002d\s]/gmu).test(message);
    }
  }

  function algorithm(message, dir, alphabet) {
    let newMessage = "";
    let errorFound = false;

    if (dir) {
      for (let char of message) {
        if (char == " ") {
          newMessage += char;
        } else {
          if (alphabet[char]) {
            let signals = alphabet[char];
            let convertedSignals = signals.replace(/[k]/mgu, "\u2022").replace(/[l]/mgu, "\u2212");
            newMessage += convertedSignals;
          }
        }
        newMessage += " ";
      }
    } else {
      let letters = message.split(" ");
      for (let char of letters) {
        if (char == "") {
          newMessage += " ";
        } else {
          let unifiedSignal = "";
          for (let signal of char) {
            if (signal == "*" || signal == "." || signal == "\u2022") {
              unifiedSignal += "k";
            } else {
              unifiedSignal += "l";
            }
          }
          if (alphabet[unifiedSignal]) {
            newMessage += alphabet[unifiedSignal];
          } else {
            newMessage += "\u26a0";
            errorFound = true
            let errorElem = document.getElementById("error-message");
            errorElem.innerHTML = "<p>Eines der Morsezeichen konnte nicht in einen Buchstaben umgewandelt werden. Bitte überprüfe die Signale noch einmal.</p>"
          }
        }
      }
    }

    if (!errorFound) {
      let errorElem = document.getElementById("error-message");
      errorElem.innerHTML = "";
    }

    return newMessage;
  }
}

// Encrypts and decrypts with caesar
function caesar(message, key, direction) {
  if (!verifyInput(message)) {
    let errorElem = document.getElementById("error-message");
    errorElem.innerHTML = "<p>Bitte verwende nur Zeichen des lateinischen Alphabets und Leerzeichen.</p>"
    return "Fehler";
  } else {
    let errorElem = document.getElementById("error-message");
    errorElem.innerHTML = "";
  }

  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let newMessage = algorithm(message, direction ? key : -key, alphabet);

  return newMessage;

  function verifyInput(message) {
    return !(/[^a-zA-Z\s]/gm).test(message);
  }

  function algorithm(msg, key, alphabet) {
    let output = "";

    for (let letter of msg) {
      if (letter == " ") {
        output += letter;
        continue;
      }

      let index = alphabet.indexOf(letter);

      if (index == -1) {
        continue;
      }

      index += key;
      index %= alphabet.length;
      if (index < 0) {
        index += alphabet.length;
      }

      output += alphabet[index];
    }

    return output;
  }
}

// Copies content of lower textfield to clipboard
function copy() {
  let message = document.getElementById("cipher-text").value;

  // Shows feedback that fades out after 2.5 seconds
  function showFeedback(message) {
    let feedbackElem = document.getElementById("feedback-copy");
    feedbackElem.innerHTML = message;
    feedbackElem.classList.add("fade-out");
    window.setTimeout(function() {
      feedbackElem.classList.remove("fade-out");
    }, 2500);
    return;
  }

  if (!navigator.clipboard) {
    showFeedback("Kopieren leider nicht möglich");
  }

  navigator.clipboard.writeText(message).then(function() {
    showFeedback("Kopiert");
  }, function() {
    showFeedback("Kopieren leider nicht möglich");
  });
}
