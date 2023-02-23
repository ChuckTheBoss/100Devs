// When the check button is pressed
document.querySelector("#check").addEventListener("click", dayOfWeek);

function dayOfWeek() {
  // read the input of Day of the week:
  let day = document.querySelector("#day").value;

  if (day === "Monday" || day === "Wednesday" || day === "Friday") {
    document.querySelector("#placeToSee").innerText = "It's a class day!";
  } else if (day === "Tuesday" || day === "Thursday") {
    document.querySelector("#placeToSee").innerText = "It's a boring day";
  } else if (day === "Saturday" || day === "Sunday") {
    document.querySelector("#placeToSee").innerText = "It's the weekend!"
  } else {
    document.querySelector("#placeToSee").innerText = "Please input a day of the week"
  }
  //Display in red text.  
}

