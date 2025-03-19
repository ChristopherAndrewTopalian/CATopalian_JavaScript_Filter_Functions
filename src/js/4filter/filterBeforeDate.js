// filterBeforeDate.js

function filterBeforeDate(whichArray, whichDate)
{
    let result = [];

    for (let z = 0; z < whichArray.length; z++)
    {
        if (whichArray[z].date < whichDate)
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

