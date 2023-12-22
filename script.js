var result = document.getElementById("result"); 
var expression = ""; 
var buttons = document.getElementsByClassName("button"); 


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var value = this.value; 
    if (value == "=") {
      calculate(); 
    } else if (value == "C") {
      clearScreen(); 
    } else {
      display(value); 
    }
  });
}


function display(value) {
  expression += value; 
  result.value = expression; 
}


function calculate() {
  var output = eval(expression); 
  result.value = output;
  expression = output; 
}


function clearScreen() {
  result.value = ""; 
  expression = ""; 
}