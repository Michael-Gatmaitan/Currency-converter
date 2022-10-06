"use strict";
var el_num1 = document.getElementById("num1");
var el_num2 = document.getElementById("num2");
var addButton = document.getElementById("add-number");
var result = document.getElementById("result");
;
var addNumbers;
addNumbers = function (a, b) { return a + b; };
var triggerSubmit = function (e) {
    e.preventDefault();
    var val1 = parseInt(el_num1.value);
    var val2 = parseInt(el_num2.value);
    var inputValues = {
        num1: val1,
        num2: val2
    };
    var num1 = inputValues.num1, num2 = inputValues.num2;
    var numResult = addNumbers(num1, num2);
    console.log(num1, num2);
    result.innerHTML = numResult.toString();
};
addButton.addEventListener('click', triggerSubmit);
