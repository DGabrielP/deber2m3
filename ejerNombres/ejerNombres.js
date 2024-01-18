
'use strict'

//1

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

let userName = prompt("Ingrese un nombre:");

let nombre = userName.toLowerCase();
let estudiantes = students.map(student => student.toLowerCase());

let index = estudiantes.indexOf(nombre);

if (index !== -1){
    alert('Si se encuentra');
} else {
    alert('No se encuentra');
}

//2

let phrase = 'La programación web es fundamental para el progreso';

let words = phrase.split(' ');

let num = words.length;

alert(`La frase tiene ${num} palabras.`);

//3

let longPhrase = words.filter(word => word.length > 3);