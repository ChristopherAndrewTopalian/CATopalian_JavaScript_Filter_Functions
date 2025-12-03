// filterByMonthDay.js

function filterByMonthDay(whichArray, whichDateString)
{
    let result = [];

    // parse the input string "MM/DD" into numbers
    // example: "01/05" becomes 1 and 5. "1/5" also becomes 1 and 5.
    let parts = whichDateString.split('/');
    
    if (parts.length !== 2)
    {
        return result;
    }

    let targetMonth = parseInt(parts[0], 10);
    let targetDay = parseInt(parts[1], 10);

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert item data to a Date Object
        let dateObj = new Date(whichArray[z].date);

        // get the Month (0-11), so we add 1 to match the input (1-12)
        let itemMonth = dateObj.getMonth() + 1;

        // get the Day of the Month (1-31)
        let itemDay = dateObj.getDate();

        // compare Numbers
        if (itemMonth === targetMonth && itemDay === targetDay)
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

