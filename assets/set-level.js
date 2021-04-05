var level_svg = document.getElementById('crowdfund-level');

var default_height = 10.3;
var default_y = 264.773;

var min_height = 10.3;
var max_height_diff = 230;

var max_fund = 50000;

var animation_time = 2000.0;

var t0 = funding_status/max_fund;

let start;
  function step(timestamp) {
    if (start === undefined)
      start = timestamp;
    const elapsed = timestamp - start;
  
  var t1 = Math.min(elapsed / animation_time * t0, t0);
  var t2 = Math.min(t1,1);
  
  var cur_height = min_height + t2 * max_height_diff;
  level_svg.setAttribute("height", cur_height)
  level_svg.setAttribute("y", default_y-(cur_height-default_height))
  
  var level_arrow_svg = document.getElementById('level-arrow');
  
  var arrow_default_y = 64;
  var arrow_rotation = 30;
  
  var arrow_height = arrow_default_y - t2 * max_height_diff;
  
  level_arrow_svg.setAttribute("transform", "translate(-50," + arrow_height + ")");
  
  
  var funding_status_svg = document.getElementById("funding-status")
  funding_status_svg.textContent = Math.round(t1 * max_fund) + "€";
  
  if(funding_status > 47000){
  	var arrow_rotate_svg = document.getElementById('arrow-rotate');
  	arrow_rotate_svg.setAttribute("transform", "rotate(30, 285, 212)");
  	level_arrow_svg.setAttribute("transform", "translate(-55," + (arrow_height + 7) + ")");
  
  	funding_status_svg.setAttribute("x", "330");
  	funding_status_svg.setAttribute("y", "250");
  }

  if (elapsed < animation_time) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

function endAnimation() {
	confetti.start();

	document.getElementById("geschafft").textContent = "Geschafft!";
}

setTimeout(endAnimation, 2000);
setTimeout(confetti.stop, 5000);
