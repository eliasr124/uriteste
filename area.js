// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.
const input = require('fs').readFileSync('stdin', 'utf-8');

let [A, B, C] = input.split(" ");

let pi = 3.14159;

let triangulo = (A * C) / 2.0;
let circulo = pi * Math.pow(C, 2);
let trapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
let quadrado = B * B;
let retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));