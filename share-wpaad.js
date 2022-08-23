"use strict";

async function share(button) {
  try {
    await navigator.share({
      title: "Ich habe diese tolle Verschlüsselungs-Website entdeckt!",
      text: "Mit wpaad kannst du viel über Verschlüsselungs- und Codierungsverfahren lernen und sie auch direkt ausprobieren. Schau doch mal vorbei!",
      url: document.location
    });
    button.innerHTML = "Danke!"
    window.setTimeout(function() {
      button.innerHTML = '<img src="icons/share.svg" /> Teilen';
    }, 2500);
  } catch {
    button.innerHTML = "Leider ist ein Fehler aufgetreten...";
    window.setTimeout(function() {
      button.innerHTML = '<img src="icons/share.svg" /> Teilen';
    }, 2500);
  }
}
