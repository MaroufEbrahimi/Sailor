
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
