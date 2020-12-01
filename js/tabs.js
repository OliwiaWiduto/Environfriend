function openCity(evt, cityName, section) {
  var i, tabcontent, tablinks;
  const currentTarget = evt.currentTarget;

  tabcontent = document.getElementsByClassName(`tabcontent-${section}`);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  currentTarget.className += " active";
}