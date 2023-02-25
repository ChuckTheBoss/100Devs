// Exercises from https://javascript.info/array-methods

function carousel(num) {
    let i = 1;
    while (i <= num) {
        console.log(i);
        i += 1;
    }
}
// carousel(50);

function oddOrEven(num) {
    for (let i = 0; i < 10; i++) {
        let numSum = i + num;
        if (numSum % 2 === 0) {
            console.log(`${numSum} is even`);
        } else {
            console.log(`${numSum} is odd`);
        }
    }
}

//oddOrEven(15);

function lessThan100() {
    let num = prompt("please input a number")
    num = parseInt(num);
    if (num <= 100) {
        console.log("great job");
    } else {
        lessThan100();
    }
}

// lessThan100();

function multiplicationTable(num) {
    for (i = 1; i < num; i++) {
        console.log(i + " * " + num + " = " + i * num);
    }
}

// multiplicationTable(12);

function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// console.log(camelize("my-long-word"));

function filterRange(arr, num1, num2) {
    let filtered = [];
    arr.forEach(num => {
        if (num >= num1 && num <= num2) {
            filtered.push(num);
        }
    })
    return filtered;
}

function filter(arr, num1, num2) {
    return arr.filter(num => (num1 <= num && num <= num2))
}

// console.log(filterRange([5, 3, 8, 1], 1, 4));

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}

// let arr = [5, 3, 8, 1];

//filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// // console.log(arr);

// let arr = [5, 2, 1, -10, 8];

//arr.sort((a, b) => b - a);

//console.log(arr);

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)