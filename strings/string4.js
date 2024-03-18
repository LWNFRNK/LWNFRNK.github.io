
const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, 
we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, 
the length of the hypotenuse is ${Math.sqrt((a*a)+(b*b)).toFixed(2)}.`;//cambio el tipo de cadena y cambio los * por las expresiones


// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = myString;
section.appendChild(para1);