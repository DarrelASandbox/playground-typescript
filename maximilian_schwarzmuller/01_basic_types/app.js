var add = function (showAnswer, description, n1, n2) {
    return showAnswer && console.log(description + (n1 + n2));
};
var printAnswer = true;
var num1 = 5;
var num2 = 2.8;
var description = "".concat(num1, " + ").concat(num2, " = ");
add(printAnswer, description, num1, num2);
var date1 = new Date().getFullYear();
var date2 = new Date('10/1/2012').getFullYear();
var age = date1 - date2;
// Explicitly assign types
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
var person = {
    name: 'TypeScript',
    age: age,
    details: { description: 'A better JavaScript', lovable: true },
    tags: ['static', 'types'],
    tuple: ['Fixed length array', 2, true],
    role: Role.AUTHOR
};
person.tuple.push('CaN StILl PuSH iNTo TUplE UnLeSS wE sTAtE `readonly`');
console.log(JSON.stringify(person, null, 2));
