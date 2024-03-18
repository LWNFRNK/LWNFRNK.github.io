const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here
var quoteLength= quote.length;//tomo la longitud de la cadena
var index=quote.indexOf(substring);//tomo el indice de substring en quote

var revisedQuote=quote.slice(0,index)+substring;//corto quote y agrego substring para hacer la oracion entera


// Don't edit the code below here!

const section = document.querySelector('section');

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);