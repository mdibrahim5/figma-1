let questions = document.querySelectorAll(".faq_question");
function myFunction(x) {
  x.classList.toggle("fa fa-window-minimize");
}
      questions.forEach((question) => {
        let icon = question.querySelector(".icon-shape");

        question.addEventListener("click", (event) => {
          const active = document.querySelector(".faq_question.active");
          const activeIcon = document.querySelector(".icon-shape.active");

          if (active && active !== question) {
            active.classList.toggle("active");
            activeIcon.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
          }

          question.classList.toggle("active");
          icon.classList.toggle("active");

          const answer = question.nextElementSibling;

          if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
            answer.style.maxHeight = 0;
          }
        });
      });
function myFunction(x) {
  x.classList.toggle("fa-minus");
}
document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 49, 3000);
 counter("count2", 100, 50, 2500);
 counter("count3", 0, 299, 3000);
});
var typed = new Typed('.auto-type', {
      strings: ['<i>History</i> sentence.', 'Contact Us; a second sentence.','Privacy; a second sentence.'],
      typeSpeed: 150,
    });