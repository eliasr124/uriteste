const input = require('fs').readFileSync('stdin', 'utf-8');

let [A, B, C] = input.split(" ").map(item => parseInt(item));

let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maiorCX = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorCX, "eh o maior");