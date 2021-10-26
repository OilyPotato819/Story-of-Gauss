// Story of Gauss

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");

// Add Event Listenener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
    // Sum integers 1 to 100
    let total = 0;
    for (let n = 1; n <= 100; n++) {
        total = total + n;
    }

    // Output the Total
    sumOut.innerHTML = total;
}