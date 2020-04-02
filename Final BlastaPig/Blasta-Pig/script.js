document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 110, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:700, jumpHeight: 300});
});