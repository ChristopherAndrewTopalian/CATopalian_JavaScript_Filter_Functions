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

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

