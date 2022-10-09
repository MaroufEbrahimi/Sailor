
// Header link activate
const link_active = document.querySelectorAll('.link_active');
function activeHeaderLink() {
   link_active.forEach(ele => {
      ele.classList.remove('active');
   });
   this.classList.add('active');
}
link_active.forEach(ele => {
   ele.addEventListener('click', activeHeaderLink);
});

// header-sticky
const header_scroll = document.querySelector('.header');
const drop_down_scroll = document.querySelector('.drop_down');
window.addEventListener('scroll', function () {
   header_scroll.classList.toggle('header_sticky', this.window.scrollY > 0);
   drop_down_scroll.classList.toggle('drop_down_scroll', this.window.scrollY > 0);
});

// showcase slider
const showcase_slider = document.querySelectorAll('.showcase_content');
let current_slide = 0;
showcase_slider[current_slide].style.opacity = 1;

setInterval(() => {
   next_slide();
}, 5000);

function next_slide() {
   showcase_slider[current_slide].style.zIndex = -2;
   let temp = showcase_slider;
   setTimeout(() => {
      showcase_slider[temp].style.opacity = 0;
   }, 1000);
   current_slide = (current_slide + 1) % showcase_slider.length;
   showcase_slider[current_slide].style.opacity = 1;
   showcase_slider[current_slide].style.zIndex = -1;
}

// back to top button
const back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', function () {
   if (this.window.scrollY > 150) {
      back_to_top.style.opacity = 1;
      back_to_top.style.cursor = 'pointer';
   } else {
      back_to_top.style.opacity = 0;
      back_to_top.style.cursor = 'default';
   }
});


// Portoflio buttons
const por_active_link = document.querySelectorAll('.por_active_link');
function por_active_button() {
   por_active_link.forEach(element => {
      element.classList.remove('por_active');
   });
   this.classList.add('por_active');
}
por_active_link.forEach(ele => {
   ele.addEventListener('click', por_active_button)
});