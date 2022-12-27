/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

let Number = [5,3,7,21,6,6,3,4]

Number.sort(function(a,b){
    return b-a;
});

let len = Number.length;
const max = Number[0];
const min = Number[len - 1];

const element = Number.find(function(number){
    return number < max;
})

console.log(element);
