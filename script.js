function addDisplay(value) {
    const display = document.getElementById('display');

    if (display.value === "0" && !isNaN(value) || value === ".") {
        display.value = value;
    }

    else {
        display.value += value;
    }
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/%/g, "/100");

        const result = eval(expression); // High Risk vulnerability "eval()"
        document.getElementById('display').value = result;
    }
    catch (error) {
        document.getElementById('display').value = "ERROR!";
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function delDisplay() {
    const del = document.getElementById('display');
    const value = del.value;
    
    if (value.length > 1) {
        del.value = value.slice(0, -1);
    }
    else {
        del.value = "0";
    }
}