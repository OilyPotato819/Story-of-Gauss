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
    let total = 0;
    let x = nIn.value

    for (let n = 1; n <= x && x <= 10000000; n++) {
        total += n;
    }

    // Outputs
    if (x >= 2 && x <= 10000000) {
        nOut.innerHTML = x;
        sumOut.innerHTML = total;
        invalidNum.innerHTML = ""
    } else {
        nOut.innerHTML = "?";
        sumOut.innerHTML = "---";
        invalidNum.innerHTML = "Not a valid number"
    }
}