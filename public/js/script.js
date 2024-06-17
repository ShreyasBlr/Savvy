const element = document.getElementById("root");

element.addEventListener("touchstart", (e) => {
  console.log(e.pageX);
  // is not near edge of view, exit
  if (e.pageX > 10 && e.pageX < window.innerWidth - 10) return;

  // prevent swipe to navigate back gesture
  e.preventDefault();
});
