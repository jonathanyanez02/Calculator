// Add event listeners to the buttons
document.getElementById("add").addEventListener("click", addFunction);
document.getElementById("subtract").addEventListener("click", subtractFunction);
document.getElementById("multiply").addEventListener("click", multiplyFunction);
document.getElementById("divide").addEventListener("click", divideFunction);
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

// Function template for addition
function addFunction() {
    // Your code for addition goes here
    if (!validateInput()) {
        return;
    }
    let sum = parseFloat(input1.value) + parseFloat(input2.value);
    console.log(sum);
    console.log("Addition function is called");
    return sum;
    
}

// Function template for subtraction
function subtractFunction() {
    // Your code for subtraction goes here
    if (!validateInput()) {
        return;
    }
    let sub = parseFloat(input1.value) - parseFloat(input2.value);
    console.log(sub);
    console.log("Subtraction function is called");
    return sub;
    
}

// Function template for multiplication
function multiplyFunction() {
    // Your code for multiplication goes here
    if (!validateInput()) {
        return;
    }
    let mul = parseFloat(input1.value) * parseFloat(input2.value);
    console.log(mul);
    
    console.log("Multiplication function is called");
    return mul;
    
}

// Function template for division
function divideFunction() {
    // Your code for division goes here
    if (!validateInput()) {
        return;
    }
    let div = parseFloat(input1.value) / parseFloat(input2.value);
    console.log(div);
    console.log("Division function is called");
    return div;

    
}

function validateInput() {
    if (input1.value.trim() === "" || isNaN(parseFloat(input1.value))) {
        alert("Please enter a valid number in Input 1.");
        return false;
    }

    if (input2.value.trim() === "" || isNaN(parseFloat(input2.value))) {
        alert("Please enter a valid number in Input 2.");
        return false;
    }

    return true;
}



