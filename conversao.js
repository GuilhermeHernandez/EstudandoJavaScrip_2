// tipo de dados
// booleanos 

// conversão implicita 
const numero = 456 ;
const numeroStr = '456';

// com 2 (=) ele transforma a 2 variaveis em string e verifica se ela é igual
console.log(numero == numeroStr);

// com 3 (=) ele compara igual as linguagem normal
console.log(numero === numeroStr);

// alem disso o javascrip sempre transforma a variavel e string e concatena 
console.log(numeroStr + numero)

// CONVERSÃO EXPLICITA 

//Number()
//String()
console.log(numero + Number(numeroStr))
