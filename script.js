// Story of Gauss

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nIn = document.getElementById("n-in");
let nOut = document.getElementById("n-out");
let invalidNum = document.getElementById("not-valid");

// Add Event Listenener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
    // Sum integers 1 to 100
    let n = +nIn.value
    let x = n * (n + 1) / 2;

    // // Outputs
    if (n >= 2 && n <= 9000000) {
        nOut.innerHTML = n;
        sumOut.innerHTML = x;
        invalidNum.innerHTML = ""
    } else {
        nOut.innerHTML = "?";
        sumOut.innerHTML = "---";
        invalidNum.innerHTML = "Not a valid number"
    }
}