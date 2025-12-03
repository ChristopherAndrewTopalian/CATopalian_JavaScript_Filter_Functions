// filterByDate.js

function filterByDate(whichArray, whichDate)
{
    let result = [];

    // convert the target to a "Day String" (e.g., "Tue Dec 02 2025")
    // this strips out the time component automatically.
    let targetString = new Date(whichDate).toDateString();

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert the current item to a "Day String" too
        let itemString = new Date(whichArray[z].date).toDateString();

        // compare the strings
        if (itemString === targetString)
        {
            result.push(whichArray[z]);
        }
    }
    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

