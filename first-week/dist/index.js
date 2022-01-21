var $background = document.querySelector("#background");
var $codeWrapper = document.querySelector(".code-wrapper");
var $clickButton = document.querySelector(".click-button"); // $clickButton.addEventListener("click",hex);

function hex() {
  var code = "";
  var POSSIBLE = "ABCDEF0123456789";

  for (var i = 0; i < 6; i++) {
    code += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
  }

  $background.style.backgroundColor = "#" + code;
  var hexCode = "HEX COLOR : #" + code;
  $codeWrapper.textContent = hexCode;
}