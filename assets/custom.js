var i = 0;
var txt = 'I’m a certified and registered Fitness Trainer and Health Nutritionist. I love helping people to reach their health goals.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 800);