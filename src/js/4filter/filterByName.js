// filterByName.js

function filterByName(whichArray, whichName)
{
    let result = [];

    // clean the input: remove extra spaces and make lowercase
    // we do this one time before the loop for speed
    let targetClean = whichName.trim().toLowerCase();

    for (let z = 0; z < whichArray.length; z++)
    {
        // clean the current item's name
        // check if name exists to prevent crashing on null/undefined
        if (whichArray[z].name) 
        {
            let itemClean = whichArray[z].name.trim().toLowerCase();

            if (itemClean === targetClean)
            {
                result.push(whichArray[z]);
            }
        }
    }
    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

