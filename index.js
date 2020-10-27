/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  const time = string.split(":");
  const numb = parseInt(time);

  if (numb < 12) {
    return "Good Morning"
  } 
  if (numb > 17) {
      return "Good Evening"
  }
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */

// fuction displayMessage {
  // document.getElementById('greeting').innerText = update;
// }
