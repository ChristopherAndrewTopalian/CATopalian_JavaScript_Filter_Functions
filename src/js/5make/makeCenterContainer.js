// makeCenterContainer.js

function makeCenterContainer()
{
    // centerContainer
    let centerContainer = ce('div');
    centerContainer.id = 'centerContainer';
    centerContainer.style.position = 'absolute';
    centerContainer.style.left = gr('leftMenu_buttonsContainer').right + 10;
    centerContainer.style.top = '10px';
    centerContainer.style.width = '500px';
    centerContainer.style.overflowX = 'scroll';
    ba(centerContainer);

    //-//

    // originalArrayLabel
    let originalArrayLabel = ce('div');
    originalArrayLabel.id = 'originalArrayLabel';
    originalArrayLabel.textContent = 'Original Array';
    originalArrayLabel.style.fontSize = '16px';
    centerContainer.append(originalArrayLabel);

    //-//

    // originalArrayDiv
    let originalArrayDiv = ce('div');
    originalArrayDiv.id = 'originalArrayDiv';
    originalArrayDiv.textContent = JSON.stringify(people);
    //originalArrayDiv.style.width = '550px';
    originalArrayDiv.style.height = '100px';
    originalArrayDiv.style.border = 'solid 1px rgb(100, 100, 100)';
    originalArrayDiv.style.overflowY = 'scroll';
    centerContainer.append(originalArrayDiv);

    //-//

    let hr001 = ce('br');
    hr001.style.lineHeight = '5px';
    centerContainer.append(hr001);

    //-//

    // resultLabel
    let resultLabel = ce('div');
    resultLabel.id = 'resultLabel';
    resultLabel.textContent = 'Result';
    resultLabel.style.fontSize = '16px';
    centerContainer.append(resultLabel);

    //-//

    // resultDiv
    let resultDiv = ce('div');
    resultDiv.id = 'resultDiv';
    resultDiv.textContent = 'Result';
    //resultDiv.style.width = '550px';
    resultDiv.style.height = '100px';
    resultDiv.style.border = 'solid 1px rgb(100, 100, 100)';
    resultDiv.style.overflowY = 'scroll';
    centerContainer.append(resultDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

