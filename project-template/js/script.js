/*REQ1*/
// Cache the button element
const myButton = document.getElementById('myButton');

// Use the cached element
myButton.addEventListener('click', function() {
    console.log('myButton clicked!');
});

/*REQ2*/
// Cache the button element using querySelector
const myButton2 = document.querySelector('#myButton2');

// Use the cached element
myButton2.addEventListener('click', function() {
    console.log('myButton2 clicked!');
});

/*REQ3*/
// Cache the button elements using querySelectorAll
const buttons = document.querySelectorAll('.myButton');

// Use the cached elements
buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Buttons clicked!');
    });
});

// Navigate to the parent node
const parentDiv = myButton2.parentNode; // or use parentElement

// Navigate to the first child of the parent
const firstParagraph = parentDiv.firstElementChild; // or use firstChild

// Navigate to the next sibling of the first paragraph
const secondParagraph = firstParagraph.nextElementSibling;

// Adding event listener on the button
myButton2.addEventListener('click', function() {
    // Changing the text of the first paragraph
    firstParagraph.textContent = 'The first paragraph was updated yesterday!';

    // Changing the text of the second paragraph
    secondParagraph.textContent = 'The second paragraph has been today!';
});

/*REQ4*/
// Cache all paragraph elements with the class 'message'
const messages = document.querySelectorAll('.message');

// Cache the update button
const updateButton = document.getElementById('updateButton');

// Define messages to update
const newMessages = [
    'I called last night.',
    'Yes!',
    'Thank You!'
];

// Add event listener to the button
updateButton.addEventListener('click', function() {
    // Iterate over each paragraph element
    messages.forEach((paragraph, index) => {
        // Update the text content of each paragraph
        paragraph.textContent = newMessages[index];
    });
});

//REQ5
// Cache the container in which the new element will be added
const container = document.getElementById('container2');

// Cache the button that will trigger the element addition
const addButton = document.getElementById('addButton');

// Add event listener to the button
addButton.addEventListener('click', function() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');

    // Set the content of the new paragraph
    newParagraph.textContent = 'This is a new paragraph added dynamically!';

    // Append the new paragraph to the container
    container.appendChild(newParagraph);
});

//REQ6
// Cache the container in which new elements will be added
const contentDiv = document.getElementById('content');

// Cache the button that will trigger the element addition
const addElementsButton = document.getElementById('addElementsButton');

// Add event listener to the button
addElementsButton.addEventListener('click', function() {
    // Create a new heading element
    const newHeading = document.createElement('h2');
    newHeading.textContent = 'Dynamically Added Heading';

    // Prepend the new heading to the container
    contentDiv.prepend(newHeading);

    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a newly added paragraph using appendChild.';

    // Append the new paragraph to the container
    contentDiv.appendChild(newParagraph);
});


