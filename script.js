// Get the containers
var container1 = document.getElementById("container1"); // Get the first container element
var container2 = document.getElementById("container2"); // Get the second container element

// Get the success message element
var successMessage = document.getElementById("successMessage"); // Get the success message element

// Save the initial state of the first container
var initialItems = Array.from(container1.children); // Save the initial items in an array

// Drag start event handler
function dragStart(event) {
  // Set the data being dragged and change the item's appearance
  event.dataTransfer.setData("text", event.target.id); // Set the ID of the dragged item as the data being dragged
  event.target.style.opacity = "0.4"; // Change the opacity of the dragged item
}

// Drag over event handler
function dragOver(event) {
  event.preventDefault(); // Prevent the default behavior of drag over
}

// Drop event handler
function drop(event) {
  event.preventDefault(); // Prevent the default behavior of drop
  // Get the dragged item's ID
  var itemId = event.dataTransfer.getData("text"); // Get the ID of the dragged item from the data
  var item = document.getElementById(itemId); // Get the dragged item element

  // Append the item to the second container
  container2.appendChild(item); // Append the dragged item to the second container

  // Change the item's appearance back to normal
  item.style.opacity = "1"; // Reset the opacity of the dragged item

  // Show the success message
  successMessage.innerText = "Item dropped successfully!"; // Set the text of the success message
}

// Reset function to clear the second container and reset the first container
function reset() {
  // Clear the second container
  container2.innerHTML = ""; // Remove all the child elements from the second container

  // Reset the first container to its initial state
  container1.innerHTML = ""; // Remove all the child elements from the first container
  for (var i = 0; i < initialItems.length; i++) {
    container1.appendChild(initialItems[i]); // Append the initial items back to the first container
  }

  // Clear the success message
  successMessage.innerText = ""; // Clear the text of the success message
}
