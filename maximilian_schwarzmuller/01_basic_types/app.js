var add = function (showAnswer, description, n1, n2) {
    return showAnswer && console.log(description + (n1 + n2));
};
var printAnswer = true;
var num1 = 5;
var num2 = 2.8;
var description = "".concat(num1, " + ").concat(num2, " = ");
add(printAnswer, description, num1, num2);
