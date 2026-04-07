function CalculateResult() {
    let num = document.getElementById("Subjects").value;
    num = Number(num);

    let output = "";

    if (isNaN(num) || num === 0) {
        output = "Please enter a valid number!";
    } else {
        for (let i = 1; i <=10; i++) {
            output += num + " x " + i + " = " + (num * i) + "<br>";
        }
    }

    document.getElementById("Result").innerHTML = output;
}