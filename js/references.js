const referenceContainer = document.querySelector('.reference-container');

// Loops through the all the data in referencesdata.js
referencesData.forEach(item => {
    // Creates a generic div, which will hold the data for each element
    const reference = document.createElement('div');
    
    // Sets attributes to each div, for styling and selecting
    reference.setAttribute('class', 'reference');
    reference.setAttribute('id', item.id);

    // Injects child elements with Chicago reference content
    reference.innerHTML = `
        <div class="source">Source</div>
        <p>${item.author}, <i>${item.title}</i>, ${item.date}, ${item.type}, <a href="${item.link}">${item.link}</a>
        </p>
    `;


    referenceContainer.appendChild(reference);
});


function openReference(evt, referenceName) {
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