/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */



function greet(timeString){
  if (timeString < "12"){
  timeString = 'Good Morning';
  } else if (timeString > "12" && timeString < "17"){
  timeString = 'Good Afternoon';
  } else if (timeString > "17")
    timeString = 'Good Evening';
}

/* Write your implementation of displayMessage() */
