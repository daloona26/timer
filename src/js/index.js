import  Timer  from "./timer.js";
const durationInput = document.querySelector("#duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter // perimeter * timeRemaining / totalDuration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
