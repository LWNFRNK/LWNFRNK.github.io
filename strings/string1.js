// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap";//cambie los apostrofes ' por comillas "" para que la palabra don't no afectara la sintaxis
const quoteEnd= ", but by the seeds that you plant"; //creo la 2da parte de la frase
const finalQuote= quoteStart+quoteEnd;//concateno las cadenas

// Don't edit the code below here!

const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);