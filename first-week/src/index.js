const $background = document.querySelector("#background");
const $codeWrapper = document.querySelector(".code-wrapper");
const $clickButton = document.querySelector(".click-button");
// $clickButton.addEventListener("click",hex);
function hex() {
  let code = "";			                    
  const POSSIBLE = "ABCDEF0123456789";	     

  for (let i = 0; i < 6; i++) {
    code += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));       
  }

  $background.style.backgroundColor = "#" + code;                                  
  const hexCode = "HEX COLOR : #" + code;
  $codeWrapper.textContent = hexCode;                                            
}