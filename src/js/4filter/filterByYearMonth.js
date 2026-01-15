// filterByYearMonth.js

function filterByYearMonth(whichArray, whichYearMonth)
{
    let result = [];

    // split input "2025-05" or "2025/05" into Year and Month
    // we use a "Regular Expression" ([-/]) to split by dash OR slash.
    let parts = whichYearMonth.split(/[-/]/);

    // safety check
    if (parts.length !== 2)
    {
        return result;
    }

    let targetYear = Number(parts[0]);
    let targetMonth = Number(parts[1]);

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert item data to a Date Object
        let dateObj = new Date(whichArray[z].date);

        // extract Year and Month from the item
        let itemYear = dateObj.getFullYear();
        let itemMonth = dateObj.getMonth() + 1; // JS Months are 0-11

        // compare numbers
        // this works even if one is "05" and the other is "5"
        if (itemYear === targetYear && itemMonth === targetMonth)
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

