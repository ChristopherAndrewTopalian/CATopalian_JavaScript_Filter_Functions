// filterByYear.js

function filterByYear(whichArray, whichYear)
{
    let result = [];

    // ensure the target is a number (e.g. 2025)
    let targetYear = Number(whichYear);

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert the string to a real Date object
        let dateObj = new Date(whichArray[z].date);

        // .getFullYear() returns the 4-digit year (e.g., 2025)
        if (dateObj.getFullYear() === targetYear)
        {
            result.push(whichArray[z]);
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

