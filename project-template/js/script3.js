/*REQ8*/
// Cache the paragraph element
const myParagraph = document.getElementById('myParagraph');

// Cache the buttons
const updateTextButton = document.getElementById('updateTextButton');
const updateHTMLButton = document.getElementById('updateHTMLButton');

// Add event listener to update text content using textContent
updateTextButton.addEventListener('click', function() {
  myParagraph.textContent = 'The text content has been updated!';
});

// Add event listener to update HTML content using innerHTML
updateHTMLButton.addEventListener('click', function() {
  myParagraph.innerHTML = 'The <strong>HTML</strong> content has been updated!';
});

/*REQ9*/
// Cache the paragraph element
const myParagraph2 = document.getElementById('myParagraph2');

// Cache the buttons
const changeStyleButton = document.getElementById('changeStyleButton');
const toggleClassButton = document.getElementById('toggleClassButton');

// Add event listener to change style properties
changeStyleButton.addEventListener('click', function() {
  myParagraph2.style.color = 'blue';
  myParagraph2.style.fontSize = '20px';
});

// Add event listener to toggle CSS class
toggleClassButton.addEventListener('click', function() {
  myParagraph2.classList.toggle('highlight');
});

/*REQ10*/
// Cache the image element
const myImage = document.getElementById('myImage');

// Cache the button
const changeImageButton = document.getElementById('changeImageButton');

// Add event listener to change the image source attribute
changeImageButton.addEventListener('click', function() {
  myImage.setAttribute('src', 'image2.jpg');
  myImage.setAttribute('alt', 'Image 2');
});


