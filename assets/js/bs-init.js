$(document).ready(function() {
  AOS.init({ disable: "mobile" });
});

$("#saberMais").click(function(e) {
  e.preventDefault();
  window.scrollTo(0, 900);
});

$("#aSobre").click(function(e) {
  e.preventDefault();
  window.scrollTo(0, 900);
});
