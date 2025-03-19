// resizeElements.js

function resizeElements()
{
    ge('originalArrayDiv').style.width = (window.innerWidth - 348) + 'px';

    ge('resultDiv').style.width = (window.innerWidth - 348) + 'px';

    ge('inputContainer').style.width = (window.innerWidth - 20) + 'px';
}

window.onresize = function()
{
    resizeElements();
};

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

