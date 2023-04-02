let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');
let but3 = document.querySelector('.but3');
let but4 = document.querySelector('.but4');
let but5 = document.querySelector('.but5');

let arr = [34, 756, 3, 9, 0, 45, 8746, -5, -8, 666];

class NumbersArray extends Array {
    sort() {
        this.sort((a, b) => b - a);
}
}
const myArray = new NumbersArray(34, 756, 3, 9, 0, 45, 8746, -5, -8, 666)
console.log(myArray.sort());