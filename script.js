var dragonEle = document.body.querySelector(".dragon");
var user = Number(prompt("Enter a number between 1 and 5. "));
var userHealth = 0;
var dragonHealth = 0;
while (user < 5) {
  while (userHealth < 5 || dragonHealth < 10) {
    var damage = Math.floor(Math.random() * user + 1);
    var dragon = Math.floor(Math.random() * 2 + 1);
    userHealth += dragon;
    dragonHealth += damage;
    if (userHealth > 5) {
      document.body.querySelector(".dragon").innerHTML =
        "PROGRAM ENDED. YOU'VE LOST.";
    } else {
      document.body.querySelector(".dragon").innerHTML =
        "PROGRAM ENDED. YOU'VE WON.";
    }
  }
}