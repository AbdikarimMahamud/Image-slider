const track = document.getElementById('track');
const total = track.children.length;
let index = 0;
function show() {
  track.style.transform = 'translateX(-' + index * 100 + '%)';
}
document.getElementById('next').addEventListener('click', function () {
  index = (index + 1) % total;
  show();
});
document.getElementById('prev').addEventListener('click', function () {
  index = (index - 1 + total) % total;
  show();
});
