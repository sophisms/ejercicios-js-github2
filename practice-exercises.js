// -------PRACTICE EXERCISES
// Arrays
/*Exercise #1
Open up a blank repl.it set to Javascript. Copy the code below into your workspace:*/
var arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
    console.log(arr.join(" "));
}
printOutString(arr);
//Complete the function to print out the string "This is a sentence".

/*Exercise #2
Write a function that:
-Takes in an array of numbers.
-Doubles the value of each number in the array.
-Prints out the new updated array.
Example: Given an array [1, 2, 4, 5], the output should be [2, 4, 8, 10]*/
let arreglo = [1, 2, 4, 5];
function duplicarArreglo (arreglo){
    let dobles = arreglo.map(function(x) { // "map" realiza la operación de la función en cada uno de los elementos del array
    return x*2;
    });
    return dobles;
}
console.log(duplicarArreglo(arreglo));


/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4], the sum is 10. The product is 24.*/
const numbers = [1, 2, 3, 4];
function sum(total, num) {
    return total + num;
}
function product(total, num) {
    return total * num;
}
result1 = numbers.reduce(sum);
result2 = numbers.reduce(product);
console.log (result1);
console.log (result2);

/*Exercise #4
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/ 
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
function compare(arr1, arr2) {
    var arr = [];
    for (var i in arr1) {
        if(arr2.indexOf(arr1[i]) !== -1) //Preguntarle a Felipe
        arr.push(arr1[i]);
    }
    console.log(arr);
    return arr.sort((x,y) => x-y);
}
compare(student1Courses,student2Courses);

/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
1. Write a command that prints out all of the people in the list.
2. Write the command to remove "Dani" from the array.
3. Write the command to remove "Juan" from the array.
4. Write the command to add "Luis" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
7. Write the command that gives the indexOf where "Maria" is located.

At the end of the exercise, there should be 4 people in the array.*/
//1.
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
//2.
const index1 = people.indexOf("Dani");
if (index1 > -1) {
    people.splice(index1, 1); //Preguntarle a Felipe
}
console.log(people);
//3.
const index2 = people.indexOf("Juan");
if (index2 > -1) {
    people.splice(index2, 1); //Preguntarle a Felipe
}
console.log(people);
//4.
function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1); //Elimino el elemento de su posición original en el array
    arr.splice(toIndex, 0, element); //Agrego el elemento al inicio del array (Preguntarle a Felipe)
    console.log(arr);
}
arraymove(people, 1, 0);
//5.
people.push("Sofia");
console.log(people);
//6.
for (var item in people) {
    if (people[item] == "Maria") {
        break;
    }
    else {
        console.log(people[item]);
    }
}
//7.
const index3 = people.indexOf("Maria");
console.log("Index of Maria is: ", index3);

//Sorting
/*Exercise #1
Write a program to sort a list of names alphabetically.*/
var name_list = ["Sofia", "Angeles", "Bernardo", "Adrian"];
console.log(name_list);
var sorted_list = name_list.sort();
console.log(sorted_list);

//Code Refactoring & Fixing Code
/*Exercise #1
1. Code and paste the code below into a repl.it (set to Javascript)
2. Make sure to run the program to understand the output.
3. Find ways to improve the code and make it clearer to understand.
*/
function someFunction(list) {
    if (list.length === 0) {
        return 0;
    }
    
    return list.length; //Esta función obtiene la length de un array, y en caso de estar vacío, regresa un 0
}
var empty_string = [];
aux = someFunction(empty_string);
console.log(aux);
//Código optimizado
function arrayLength(example) {
    const aux = example.length;
    console.log(aux);
}
var example = arrayLength(empty_string);
console.log(example);

/*Exercise #2
1. Copy and paste the code below into a repl.it (set to Javascript).
2. Make sure to run the program to understand what it currently outputs.
3. Write test cases and fix the code according to the expected output.

Output should be: Failed if they scored 6 or less, Insufficient if they scored > 6 but less than 9. (9 included), Good if they scored > 9 but less than 14. (14 included), Excellent if they scored 15. Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
*/
/*
function gradeLabel(grade) {
    if (grade < 6 && grade > 0) {
        console.log(“Failed”);
    }
    if (grade > 6 && grade <= 9) {
        console.log(“Insufficient”);
    }
    if (grade > 9 || grade <= 14) {
        console.log(“Good”);
    }
    if (grade == 15) {
        console.log(“Good”);
    }
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}
*/
//Código optimizado
function gradeLabel(grade) {
    if (grade>=0 && grade<=6) {
        console.log("Failed");
    }
    else if (grade>6 && grade<=9) {
        console.log("Insufficient");
    }
    else if (grade>9 && grade<=14) {
        console.log("Good");
    }
    else if (grade==15) {
        console.log("Excellent");
    }
    else {
        console.log("Error, outside of bounds");
    }
}
const grade = gradeLabel(5); // Preguntarle a Felipe 
console.log(grade);