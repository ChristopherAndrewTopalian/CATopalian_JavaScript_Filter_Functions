// filterByDateTime.js

function filterByDateTime(whichArray, whichDate)
{
    let result = [];

    // convert the target to a Timestamp (Number of milliseconds)
    let targetTime = new Date(whichDate).getTime();

    for (let z = 0; z < whichArray.length; z++)
    {
        // convert the current item to a Timestamp
        let itemTime = new Date(whichArray[z].date).getTime();

        // now we are just comparing two numbers
        // example: if (1764685320000 === 1764685320000)
        if (itemTime === targetTime)
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

