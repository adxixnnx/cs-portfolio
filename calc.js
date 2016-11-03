var operations = document.getElementById("operations")
var input = document.getElementById("input");
var inputdos = document.getElementById("inputdos");
var button = document.getElementById("button");
var answer = document.getElementById("answer");

button.addEventListener("click", function (){
    var number = input.value
    var numberdos = inputdos.value
    var operator = operations.value;

    if (operator ===  "+") {
        
        answer.innerHTML = number + numberdos;
    }
   
})
