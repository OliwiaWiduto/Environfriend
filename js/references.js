//REFERENCES

// find all divs with class "footnote"
var allFootnotes = document.querySelectorAll(".footnote");

var footnoteTotal = 1;

// loop through the array of those divs
allFootnotes.forEach(function(footnote) {
    // Reference data is required later for the ID.
    var referenceData = referencesData[footnoteTotal - 1];

    // Set the footnote number.
    footnote.innerHTML = footnoteTotal; // E.g 1.

    // Set our attributes for the footnote.
    footnote.setAttribute('href', 'javascript:void(0)');
    footnote.setAttribute("onclick", `openReference(event, '${referenceData.id}')`);

    // Must increment the footnote by 1 at the end of the loop.
    footnoteTotal++;
});






//REFERENCE CONTAINERS

const referenceContainer = document.querySelector('.reference-container');

// Loops through the all the data in referencesdata.js
referencesData.forEach(item => {
    // Creates a generic div, which will hold the data for each element
    const reference = document.createElement('div');

    // Sets attributes to each div, for styling and selecting
    reference.setAttribute('class', 'reference');
    reference.setAttribute('id', item.id);

    // Wrap publisher in brackets if there is one.
    // E.g 'Mary Jane' => '(Mary Jane)' or '' => ''.
    // item.publisher = item.publisher ? `${item.publisher}` : item.publisher;
    item.author = item.author ? `${item.author}` : item.author;
    item.title = item.title ? `, ${item.title}` : item.title;
    // item.date = item.date ? `, ${item.date}` : item.date;

    // Injects child elements with Chicago reference content
    reference.innerHTML = `
        <p>${item.id}. ${item.author} 
        <i>${item.title}</i>
        <br>
        ${item.publisher},
        ${item.date} ${item.year}, 
        <a href="${item.link}">${item.link}</a>
        </p>
    `;


    referenceContainer.appendChild(reference);
});





//ON CLICK, SHOW REFERENCE CONTAINER

function openReference(evt, referenceName) {
    var i, reference, footnoteButton;

    reference = document.getElementsByClassName("reference");
    for (i = 0; i < reference.length; i++) {
        reference[i].style.display = "none";
    }

    footnoteButton = document.getElementsByClassName("footnote");
    for (i = 0; i < footnoteButton.length; i++) {
        footnoteButton[i].className = footnoteButton[i].className.replace(" active", "");
    }

    document.getElementById(referenceName).style.display = "inline-block";
    evt.currentTarget.className += " active";
}










