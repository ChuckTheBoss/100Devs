//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = "black";
stopwatch.shape = "circle";
stopwatch.brand = "Swiss";
stopwatch.size = "large";

stopwatch.tellTime = function (time) {
    alert("The current time is" + time)
};
stopwatch.alarm = function (time) {
    alert("WAKE UP")
};
stopwatch.timer = function (time) {
    alert(currentTime - futureTime);
}