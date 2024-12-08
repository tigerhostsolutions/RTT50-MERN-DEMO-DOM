/*REQ7*/
// Cache the list container
const itemList = document.getElementById('itemList');

// Cache the button that will trigger the addition of list items
const addItemsButton = document.getElementById('addItemsButton');

// Create a template list item
const templateItem = document.createElement('li');
templateItem.textContent = 'Item';

// Add event listener to the button
addItemsButton.addEventListener('click', function() {
  // Create a DocumentFragment to hold the new list items
  const fragment = document.createDocumentFragment();

  // Number of items to add
  const numberOfItemsToAdd = 5;

  for (let i = 1; i <= numberOfItemsToAdd; i++) {
    // Clone the template item
    const newItem = templateItem.cloneNode(true);

    // Update the text content with a unique identifier
    newItem.textContent += ` ${i}`;

    // Append cloned item to the fragment
    fragment.appendChild(newItem);
  }

  // Append the fragment to the list
  itemList.appendChild(fragment);
});