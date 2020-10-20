var dragonEle=document.body.querySelector(".dragon");
var dragonHealth=0;var userHealth=0;
var user=Number(prompt("Enter a number."));
while(user<=5){
while(userHealth<5||dragonHealth<10){
  var damage=Math.floor(Math.random()*user+1);
  var dragon=Math.floor(Math.random()*2+1);
  dragonHealth+=damage;
  userHealth+=dragon;
}}
document.body.querySelector(".dragon").innerHTML="PROGRAM ENDED.";