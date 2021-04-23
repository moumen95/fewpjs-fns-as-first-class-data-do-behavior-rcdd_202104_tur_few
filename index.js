/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */



function greet(timeString){
  const hour = parseInt(timeString);
  if (hour < "12"){
  return 'Good Morning';
  } else if (hour > "17"){
  return 'Good Evening';
  } else {
    return 'Good Afternoon';
    // console.log('Good Evening')
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(msg){
let content = document.getElementById("greeting").innerText = msg;
}