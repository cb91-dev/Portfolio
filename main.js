// Get the container element
var btnContainer = document.getElementById("nav-tab");
var pageContainer = document.getElementById("nav-tabContent");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");
var tab_pane = pageContainer.getElementsByClassName("tab-pane");

// Loop through the buttons and add the active class to the current/clicked button
function contact_me() {
  for (var b = 0; b < btns.length; b++) {
    btns[0].classList.remove("active");
    btns[1].classList.remove("active");
    btns[2].classList.add("active");
  }
  for (var t = 0; t < tab_pane.length; t++) {
    tab_pane[0].classList.remove("active", "show");
    tab_pane[1].classList.remove("active", "show");
    tab_pane[2].classList.add("active", "show");
  }
}

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
