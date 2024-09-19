let results = [];  
let x, y, operator;
let proceed = true;

document.write("<table>");
document.write("<tr><th>Num 1</th><th>Operator</th><th>Num 2</th><th>Result</th></tr>");

function calculate(x, y, operator) {
    let result;
    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = y !== 0 ? x / y : "Cannot divide by zero";
            break;
        case "%":
            result = y !== 0 ? x % y : "Cannot modulus by zero";
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

while (proceed) {
    x = prompt("Enter the first number (x):");
    if (x === null) break;  
    operator = prompt("Enter the operator (+, -, *, /, %):");
    if (operator === null) break;  
    y = prompt("Enter the second number (y):");
    if (y === null) break; 


    x = parseFloat(x);
    y = parseFloat(y);

    // Check if x and y are valid numbers
    if (isNaN(x) || isNaN(y)) {
        document.write("<tr><td colspan='4'>Invalid input: x or y is not a number</td></tr>");
        continue;  // Skip invalid inputs
    }

    let result = calculate(x, y, operator);
    if (typeof result === "number") {
        results.push(result);  // Only store valid results (numbers)
    }

    // Add a row to the table
    document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
}


document.write("</table>");
if (results.length > 0) {
    const min = Math.min(...results);
    const max = Math.max(...results);
    const total = results.reduce((acc, curr) => acc + curr, 0);
    const avg = total / results.length;

 
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
} else {
    document.write("<p>No valid results to display.</p>");
}
