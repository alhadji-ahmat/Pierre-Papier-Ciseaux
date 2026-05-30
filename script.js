let playerScore = 0;
let computerScore = 0;

let hardMode = false;

window.onload = function () {

  setTimeout(() => {

    document.getElementById("loadingScreen")
      .style.display = "none";

  }, 3000);

};

function startGame() {

  document.getElementById("startScreen")
    .style.display = "none";

  document.getElementById("gameBox")
    .style.display = "block";

}

const hardBtn =
  document.getElementById("hardBtn").style.display = "block";

hardBtn.addEventListener("click", () => {

  hardMode = !hardMode;

  if (hardMode) {

    hardBtn.textContent =
      "🧠 MODE DIFFICILE : ON";

  }

  else {

    hardBtn.textContent =
      "🧠 MODE DIFFICILE : OFF";

  }

});

function play(playerChoice) {

  if (
    playerScore === 5 ||
    computerScore === 5
  ) {
    return;
  }

  document.getElementById("result")
    .textContent = "3...";

  const choices = [
    "Pierre",
    "Papier",
    "Ciseaux"
  ];

  let computerChoice;

  if (hardMode) {

    if (playerChoice === "Pierre") {

      computerChoice = "Papier";

    }

    else if (
      playerChoice === "Papier"
    ) {

      computerChoice = "Ciseaux";

    }

    else {

      computerChoice = "Pierre";

    }

  }

  else {

    computerChoice =
      choices[
        Math.floor(
          Math.random() * 3
        )
      ];

  }

  let result = "";

  if (
    playerChoice === computerChoice
  ) {

    result = "Égalité 😐";

  }

  else if (

    (playerChoice === "Pierre" &&
      computerChoice === "Ciseaux") ||

    (playerChoice === "Papier" &&
      computerChoice === "Pierre") ||

    (playerChoice === "Ciseaux" &&
      computerChoice === "Papier")

  ) {

    result = "Tu gagnes 🎉";

    playerScore++;

  }

  else {

    result = "Le PC gagne 🤖";

    computerScore++;

  }

  const emojis = {

    Pierre: "🪨",
    Papier: "📄",
    Ciseaux: "✂️"

  };

  document.getElementById("choices")
    .textContent =
    `${emojis[playerChoice]} VS ${emojis[computerChoice]}`;

  setTimeout(() => {

    document.getElementById("result")
      .textContent =
      `Tu : ${playerChoice} | PC : ${computerChoice} → ${result}`;

  }, 1500);

  document.getElementById("score")
    .textContent =
    `Joueur : ${playerScore} | PC : ${computerScore}`;

  if (playerScore === 5) {

    setTimeout(() => {

      document.getElementById("result")
        .textContent =
        "🏆 Tu as gagné !";

      document.getElementById("gameOver")
        .textContent =
        "🔥 GAME OVER 🔥";

      document.getElementById("gameBox")
        .classList.add("shake");

      document.body.classList.add("flash");

    }, 1500);

  }

  if (computerScore === 5) {

    setTimeout(() => {

      document.getElementById("result")
        .textContent =
        "💀 Le PC gagne !";

      document.getElementById("gameOver")
        .textContent =
        "🔥 GAME OVER 🔥";

      document.getElementById("gameBox")
        .classList.add("shake");

      document.body.classList.add("flash");

    }, 1500);

  }

}

function restartGame() {

  playerScore = 0;
  computerScore = 0;

  document.getElementById("score")
    .textContent =
    "Joueur : 0 | PC : 0";

  document.getElementById("result")
    .textContent =
    "Choisis une option";

  document.getElementById("choices")
    .textContent =
    "❔ VS ❔";

  document.getElementById("gameOver")
    .textContent = "";

}

if ("serviceWorker" in navigator) {

  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {

      console.log("Service Worker installe 😎");

    });
     
}