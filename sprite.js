const animated_element = document.getElementById("sprite");

const frame_width = animated_element.offsetWidth;
const frame_height = animated_element.offsetHeight;
const total_frames = 22;
let frame_count = 0;
let animationInterval;

let frames_per_row = 2;
let frames_per_column = 11;
let current_row = 0;
let current_column = 0;

const startAnimation = () => {
  animationInterval = setInterval(() => {
    const new_x = current_column * frame_width * -1;
    const new_y = current_row * frame_height * -1;

    animated_element.style.backgroundPositionX = new_x + "px";
    animated_element.style.backgroundPositionY = new_y + "px";

    if (frame_count < total_frames) {
      frame_count += 1;
      current_column += 1;

      if (current_column >= frames_per_row) {
        current_column = 0;
        current_row += 1;

        if (current_row >= frames_per_column) {
          current_row = frames_per_column - 1;
          current_column = frames_per_row - 1;
          clearInterval(animationInterval);
        }
      }
    }
  }, 60);
};

animated_element.style.cursor = "pointer";
animated_element.addEventListener("click", startAnimation);
