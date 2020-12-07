const referenceContainer = document.querySelector('.reference-container');

// Loops through the all the data in referencesdata.js
referencesData.forEach(item => {
    // Creates a generic div, which will hold the data for each element
    const reference = document.createElement('div');
    
    // Sets attributes to each div, for styling and selecting
    reference.setAttribute('class', 'reference');
    reference.setAttribute('id', item.id);

    // // Adds click and hover events to each element
    // element.addEventListener('click', function(){
    //     currentElementPosition = elementPosition;
    //     toggleContainerVisibility();

    //     createElementDetails();

    //     var elementName = elementsData[currentElementPosition-1]['name'];
    //     var state = {post: currentElementPosition, visible: true};
    //     history.pushState(state, '', `#${elementName}`);
    // });
    // element.addEventListener('mouseenter', function(){
    //     hoverInfo(elementPosition);
    // });
    // element.addEventListener('focus', function(){
    //     hoverInfo(elementPosition);
    // });

    // Injects child elements with Atomic Number and Symbol
    reference.innerHTML = `
        <h5>${item.title}</h5>
        <p>${item.date}</p>
        <p>${item.type}</p>
        <p>${item.link}</p>
    `;


    referenceContainer.appendChild(reference);
});
