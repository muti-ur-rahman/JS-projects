// Function to append a value to the display
function appendToDisplay(value) {
    document.querySelector('#calculator-display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.querySelector('#calculator-display').value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.querySelector('#calculator-display');
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}
// const element = document.querySelector('.myClass');   // Selects by class
