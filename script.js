const button = document.getElementById("heart-button");
const message = document.getElementById("heart-message");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const decisionMessage = document.getElementById("decision-message");

const notes = [
  "Te amo y de verdad quiero hacerlo mejor.",
  "Gracias por existir y por todo lo bonito que me das.",
  "Si me permites, quiero demostrarte con hechos cuanto me importas.",
  "Mi lugar favorito siempre sera contigo.",
];

if (button && message) {
  button.addEventListener("click", () => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    message.textContent = randomNote;
  });
}

if (yesButton && noButton && decisionMessage) {
  let noCount = 0;
  let yesScale = 1;
  let noScale = 1;

  yesButton.addEventListener("click", () => {
    decisionMessage.textContent = "Prometo darte mucho amor, paciencia y demostrarte con hechos que puedo hacerlo mejor.";
  });

  noButton.addEventListener("click", () => {
    noCount += 1;
    yesScale += 0.28;
    noScale = Math.max(0.15, noScale - 0.22);

    yesButton.style.transform = `scale(${yesScale})`;
    noButton.style.transform = `scale(${noScale})`;
    noButton.style.opacity = `${Math.max(0.08, 1 - noCount * 0.2)}`;

    if (noCount >= 5) {
      noButton.style.display = "none";
      decisionMessage.textContent = "Ya no acepto un no, solo queda la opcion de perdonarme con mucho amor.";
      return;
    }

    decisionMessage.textContent = "Ese no hizo crecer mas el boton de Si. Intentalo otra vez y mira que pasa.";
  });
}
