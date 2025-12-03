// filterByMonth.js

function filterByMonth(whichArray, whichMonth)
{
    let result = [];

    // ensure whichMonth is a number (just in case string "5" was passed)
    let targetMonth = Number(whichMonth);

    for (let z = 0; z < whichArray.length; z++)
    {
        let dateObject = new Date(whichArray[z].date);

        // .getMonth() returns 0 for Jan, 1 for Feb, etc.
        // it ignores the Year and the Day.
        if (dateObject.getMonth() === targetMonth)
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

