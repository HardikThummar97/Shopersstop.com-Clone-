let first_slide = document.getElementById("product1").parentElement;

let left_btn = document.getElementById("left-btn");

let right_btn = document.getElementById("right-btn");

var translate = 0;
right_btn.addEventListener("click", function () {
  if (translate > -34) {
    translate -= 11;
    left_btn.style.opacity = 1;
    first_slide.style.transform = `translateX(${translate}%)`;
  } else {
    right_btn.style.opacity = 0.2;
  }
});

left_btn.addEventListener("click", function () {
  if (translate < 0) {
    translate += 11;
    right_btn.style.opacity = 1;
    first_slide.style.transform = `translateX(${translate}%)`;
  } else {
    left_btn.style.opacity = 0.2;
  }
});
