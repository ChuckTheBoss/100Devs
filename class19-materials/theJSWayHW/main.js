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