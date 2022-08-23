"use strict";

function copy(button) {
  function showFeedback(copied, button) {
    if (copied) {
      button.classList.add("copied");
      button.innerHTML = "Kopiert";
      window.setTimeout(function() {
        button.classList.remove("copied");
        button.innerHTML = "Kopieren";
      }, 1000);
    } else {
      button.classList.add("error");
      button.innerHTML = "Kopieren fehlgeschlagen";
      window.setTimeout(function() {
        button.classList.remove("error");
        button.innerHTML = "Kopieren";
      }, 1000);
    }
  }

  if (button.classList.contains("copied") || button.classList.contains("error")) {
    return;
  }

  if (!navigator.clipboard) {
    button.classList.add("error");
    button.innerHTML = "Kopieren nicht möglich";
    window.setTimeout(function() {
      button.classList.remove("error");
      button.innerHTML = "Kopieren";
    }, 1000);
    return;
  }

  if (testOutput.value == "") {
    button.classList.add("error");
    button.innerHTML = "Nichts zu kopieren";
    window.setTimeout(function() {
      button.classList.remove("error");
      button.innerHTML = "Kopieren";
    }, 1000);
    return;
  }

  navigator.clipboard.writeText(testOutput.value).then(function() {
    showFeedback(true, button);
  }, function() {
    showFeedback(false, button);
  });
}

// Improvement:
// Sharing encrypted text via webshare api
