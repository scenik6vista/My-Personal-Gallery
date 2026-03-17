/* Function to update the main display div 
  Triggered by: onmouseover and onfocus
*/
function upDate(previewPic) {
    // 1. Log to console for testing (optional but good practice)
    console.log("Event triggered: Update display with " + previewPic.alt);

    let display = document.getElementById("image");
    
    // 2. Change the background image URL
    display.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 3. Change the text to the alt text of the preview image
    display.innerHTML = previewPic.alt;
}

/* Function to reset the main display div 
  Triggered by: onmouseout and onblur
*/
function unDo() {
    let display = document.getElementById("image");

    // Requirement: Update background to empty URL
    display.style.backgroundImage = "url('')";

    // Requirement: Update text to the original hardcoded text
    display.innerHTML = "Hover over an image below to display here.";
}

/* Function to automatically add tabindex to all preview images
  Triggered by: onload
*/
function addTabIndex() {
    console.log("Page loaded - Running loop to add tabindex");

    // Select all images with the class 'preview'
    let images = document.querySelectorAll(".preview");

    // Requirement: Use a for loop to add tabindex attributes
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}