var catFacts = [
  "A group of cats is called a clowder.",
  "Cats have over 20 muscles that control their ears.",
  "Cats sleep 70% of their lives.",
  "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
  "Cats cannot taste sweet flavors.",
  "A cat's purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.",
  "Adult cats only meow to communicate with humans.",
  "Cats have 5 toes on their front paws, and 4 on the back, unless they're a polydactyl.",
  "A cat can jump up to 6 times its length.",
  "Cats use their whiskers to detect if they can fit through a space.",
  "Cats only sweat through their foot pads.",
  "Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.",
  "A cat's nose is ridged with a unique pattern, just like a human fingerprint.",
  "Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia."
];

function displayCatFact() {
  var randomIndex = Math.floor((Math.random() * catFacts.length));
  $("#cat-fact").text(" " + catFacts[randomIndex]);
}

$(document).ready(function(){
  displayCatFact();
})