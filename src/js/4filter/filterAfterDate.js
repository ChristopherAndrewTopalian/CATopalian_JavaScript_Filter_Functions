// filterAfterDate.js

function filterAfterDate(whichArray, whichDate)
{
    let result = [];

    // convert the target date
    let targetTime = new Date(whichDate); 

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert the current item's date for comparison
        let itemTime = new Date(whichArray[z].date);

        if (itemTime > targetTime)
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

