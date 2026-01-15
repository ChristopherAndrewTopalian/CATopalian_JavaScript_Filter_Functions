// filterByMonth.js

// filterByMonth.js

function filterByMonth(whichArray, whichMonth)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        let parts = whichArray[z].date.split('/');

        if (parts[1] === whichMonth)
        {
            result.push(whichArray[z]);
        }
    }

    return result;
}

/*
function filterByMonth(array, targetMonth) {
    return array.filter(function(person)
    {
        let date = new Date(person.date);
        let month = date.getMonth() + 1; // getMonth() returns 0-11
        return month === targetMonth;
    });
}
    */

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

