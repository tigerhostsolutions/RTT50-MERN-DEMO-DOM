/*REQ11*/
// Cache the paragraph element
const statusParagraph = document.getElementById('status');

// Cache the buttons
const sayHelloButton = document.getElementById('sayHelloButton');
const sayGoodbyeButton = document.getElementById('sayGoodbyeButton');

// Event handler for 'Say Hello' button
function sayHello() {
  statusParagraph.textContent = 'Hello, world!';
}

// Event handler for 'Say Goodbye' button
function sayGoodbye() {
  statusParagraph.textContent = 'Goodbye, world!';
}

// Register event listeners
sayHelloButton.addEventListener('click', sayHello);
sayGoodbyeButton.addEventListener('click', sayGoodbye);

/*REQ12*/
// Cache the paragraph element
const windowStatus = document.getElementById('windowStatus');

// Cache the buttons
const showAlertButton = document.getElementById('showAlertButton');
const checkWindowSizeButton = document.getElementById('checkWindowSize');

// Event handler for showing an alert
function showAlert() {
  window.alert('This is an alert from the browser!');
}

// Event handler for checking window size
function checkWindowSize() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  windowStatus.textContent = `Current window size: ${width}px wide by ${height}px high.`;
}

// Register event listeners
showAlertButton.addEventListener('click', showAlert);
checkWindowSizeButton.addEventListener('click', checkWindowSize);

