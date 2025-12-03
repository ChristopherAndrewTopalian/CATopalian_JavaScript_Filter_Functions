// filterBeforeDate.js

function filterBeforeDate(whichArray, whichDate)
{
    let result = [];

    // convert the target date
    let targetTime = new Date(whichDate);

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert the current item's date
        let itemTime = new Date(whichArray[z].date);

        // check if itemTime is "less than" (before) targetTime
        if (itemTime < targetTime)
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

