// -------CONTENT EXERCISES
/*Exercise #1
Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/
const numeros = [3, 5, 7, 1, 6];
function ex1(valores){
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor[0]);
}
ex1(numeros);

/*Exercise #2
Write a program to sort a list of numbers in descending order (from highest to lowest)*/
function ex2(valores){
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor);
}
ex2(numeros);

/*Exercise #3
Step 1
Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).*/
const arreglo1 = [3, 5, 7, 1, 6];
const arreglo2 = [23, -8, 10, 58, 8];
function ex3(valores){
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor[0]);
}
ex3(arreglo1.concat(arreglo2));