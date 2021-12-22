// -------ADDITIONAL EXERCISES
//Arrays
/*Create a function that compares the 3 arrays and finds any common elements. Print out the common elements.*/
/*var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple']; No hay elementos en común*/
var values1= ['Apple', 2, false];
var values2 = ['Fries', 2 ,true]; //Funciona solo con la primera
var values3 = ['Mars', 9, 'Apple'];

function compare(arr1, arr2, arr3) {
    var arr = [];
    for (var item in arr1) {
        if(arr1[item] === arr2[item]) { 
            arr.push(arr1[item]);
        }
        if(arr1[item] === arr3[item]) { 
            arr.push(arr1[item]);
        }
    console.log(arr);
    return arr.sort((x,y) => x-y);
    }
}
var values = compare(values1,values2,values3); //Preguntarle a Felipe
console.log(values);
