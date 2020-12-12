function openNav() {
    document.getElementById("mySidenav").style.width = "265px";
    document.getElementById("main").style.marginLeft = "265px";
    document.getElementById("openbtn").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.visibility = "visible";
}

var dropdown = document.getElementsByClassName("navItemsToggle");
var isClosed;
// var chevron = document.getElementsByClassName("chevron");

for (isClosed = 0; isClosed < dropdown.length; isClosed++) {
  dropdown[isClosed].addEventListener("click", function() {
    this.classList.toggle("active");
    var navItems = this.nextElementSibling;
    if (navItems.style.display === "block") {
      navItems.style.display = "none";
      // chevron.style.transform = "rotate(270deg)";
    } else {
      navItems.style.display = "block";
    }
  });
 }

//   var dropdown = document.getElementsByClassName("collapsible");
// var isClosed;

// for (isClosed = 0; isClosed < dropdown.length; isClosed++) {
//   dropdown[isClosed].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var navItem = this.nextElementSibling;
//     if (navItem.style.display === "block") {
//       navItem.style.display = "none";
//     } else {
//       navItem.style.display = "block";
//     }
//   });
// }