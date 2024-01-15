document.getElementById("calculate").addEventListener("click", function () {
    // Get selected values
    const voltage = parseFloat(document.getElementById("voltage").value);
    const capacity = parseFloat(document.getElementById("capacity").value);

    // Calculate battery dimensions
    const length = getLengthByVoltage(voltage);
    const width = getWidthByCapacity(capacity);
    const height = 8.4;

    // Update the result on the webpage
    document.getElementById("length").textContent = length.toFixed(2);
    document.getElementById("width").textContent = width.toFixed(2);
});

function getLengthByVoltage(voltage) {
    switch (voltage) {
        case 12:
            return 6.3;
        case 24:
            return 14.7;
        case 36:
            return 21.0;
        case 48:
            return 27.3;
        case 52:
            return 29.4;
        case 60:
            return 33.6;
        case 72:
            return 42.0;
        case 96:
            return 54.6;
        default:
            return 0;
    }
}

function getWidthByCapacity(capacity) {
    const baseWidth = 2.1; // 5 Ah capacity
    return baseWidth + (capacity - 5) / 5 * 2.2 * 1.1;
}
