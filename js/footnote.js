//define variables

var i, footnote;

// get all divs with class "test"
footnote = document.querySelector('.footnote');

//loop through them
for (i = 0; i < footnote.length; i++) {
    document.querySelector('.footnote').innerHTML += "number " + i;
  }


// append id from referencesdata.js to <a> tag

// add ascending number between <a> tags



---

for(i = 1; i<=10 ; i++)
{
    document.getElementById('numbers').innerHTML += "number " + i;
}

---

function createFootnote(evt, referenceName) {

  var i, reference, referenceButton;

  reference = document.getElementsByClassName("reference");

  for (i = 0; i < reference.length; i++) {
    reference[i].style.display = "none";
  }


  referenceButton = document.getElementsByClassName("referenceButton");
  for (i = 0; i < referenceButton.length; i++) {
    referenceButton[i].className = referenceButton[i].className.replace(" active", "");
  }


  document.getElementById(referenceName).style.display = "inline-block";
  evt.currentTarget.className += " active";
}