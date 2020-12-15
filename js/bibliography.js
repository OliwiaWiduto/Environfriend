
//REFERENCE CONTAINERS

const bibliographyContainer = document.querySelector('.bibliography-container');

// Loops through the all the data in referencesdata.js
referencesData.forEach(item => {
    // Creates a generic div, which will hold the data for each element
    const reference = document.createElement('div');

    reference.setAttribute('class', 'bibliography-item');

    // Injects child elements with Chicago reference content
    reference.innerHTML = `
        <p><span class="bib-footnote">${item.id}</span> ${item.author} 
        <i>${item.title}</i> 
        ${item.publisher}
        ${item.date} ${item.year}, 
        <a href="${item.link}">${item.link}</a>
        </p>
    `;


    bibliographyContainer.appendChild(reference);
});