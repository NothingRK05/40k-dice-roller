function setDice(amount) {
    document.getElementById("numDice").value = amount;
    rollDice();
}

function rollDice() {
    const numDice = parseInt(document.getElementById("numDice").value) || 1;
    const tray = document.getElementById("diceTray");
    const breakdownGrid = document.getElementById("breakdownGrid");
    const totalSumDisplay = document.getElementById("totalSum");
    const totalDiceDisplay = document.getElementById("totalDice");

    tray.innerHTML = "";
    breakdownGrid.innerHTML = "";

    let rolls = [];
    let counts = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; rolls.push(roll); counts[roll - 1]++;
        const die = document.createElement("div"); die.className = "die"; die.textContent = roll; tray.appendChild(die);
    } let
        totalSum = rolls.reduce((a, b) => a + b, 0);
    totalSumDisplay.textContent = totalSum;
    totalDiceDisplay.textContent = rolls.length;

    for (let value = 1; value <= 6; value++) {
        const item = document.createElement("div"); item.className = "breakdown-item"
            ; item.innerHTML = `<strong>${value}</strong>: ${counts[value - 1]}`;
        breakdownGrid.appendChild(item);
    }
}

// Automatically roll 1 die when the pa
window.addEventListener("DOMContentLoaded", () => {
    rollDice();
});