// filterByMonthDay.js

function filterByMonthDay(whichArray, whichDateString)
{
    let result = [];

    // split input string "MM/DD" into month and day
    let dateParts = whichDateString.split('/');

    if (dateParts.length !== 2)
    {
        // return empty array if input format is incorrect
        return result;
    }

    let whichMonth = dateParts[0];
    let whichDay = dateParts[1];

    for (let z = 0; z < whichArray.length; z++)
    {
        // split date & time
        let parts = whichArray[z].date.split(' ');

        // extract YYYY/MM/DD
        let datePart = parts[0];
        let month = datePart.substring(5, 7);
        let day = datePart.substring(8, 10);

        if (whichMonth.length === 1)
        {
            whichMonth = '0' + whichMonth;
        }
        if (whichDay.length === 1)
        {
            whichDay = '0' + whichDay;
        }

        if (month === whichMonth && day === whichDay)
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

