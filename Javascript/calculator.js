function calculate() {
    var a = parseInt(document.getElementById("value1").value);
    var b = parseInt(document.getElementById("value2").value);
    var op = document.querySelector("operator").value;
    var calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    }

    document.getElementById("output").innerHTML = calculate;
}