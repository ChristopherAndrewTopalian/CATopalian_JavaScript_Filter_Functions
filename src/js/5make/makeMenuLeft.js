// makeMenuLeft.js

function makeMenuLeft()
{
    let nameSpace = 'leftMenu_';

    // buttonsContainer
    let buttonsContainer = ce('div');
    buttonsContainer.id = nameSpace + 'buttonsContainer';
    buttonsContainer.style.position = 'fixed';
    buttonsContainer.style.left = '0px';
    buttonsContainer.style.top = '5px';
    buttonsContainer.style.height = '200px';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';
    buttonsContainer.style.overflowY = 'scroll';
    ba(buttonsContainer);

    //-//

    let filtersLabel = ce('div');
    filtersLabel.textContent = 'Filters';
    filtersLabel.style.fontSize = '16px';
    filtersLabel.style.margin = 'auto';
    buttonsContainer.append(filtersLabel);

    //-//

    // showAllButton
    let showAllButton = ce('button');
    showAllButton.className = 'buttonStyle001';
    showAllButton.id = nameSpace + 'showAllButton';
    showAllButton.textContent = 'showAll';
    showAllButton.title = 'showAll(people)';
    showAllButton.onmouseover = function()
    {
        hoverSound();
        // audioPlay('sfx_warp_001', 1.0);
    };
    showAllButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(showAll(people));
    };
    buttonsContainer.append(showAllButton);

    //-//

    // showAllNamesButton
    let showAllNamesButton = ce('button');
    showAllNamesButton.className = 'buttonStyle001';
    showAllNamesButton.id = nameSpace + 'showAllNamesButton';
    showAllNamesButton.textContent = 'showAllNames';
    showAllNamesButton.title = 'showAllNames(people)';
    showAllNamesButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    showAllNamesButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(showAllNames(people));
    };
    buttonsContainer.append(showAllNamesButton);

    //-//

    // showAllDatesButton
    let showAllDatesButton = ce('button');
    showAllDatesButton.className = 'buttonStyle001';
    showAllDatesButton.id = nameSpace + 'showAllDatesButton';
    showAllDatesButton.textContent = 'showAllDates';
    showAllDatesButton.title = 'showAllDates(people)';
    showAllDatesButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    showAllDatesButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(showAllDates(people));
    };
    buttonsContainer.append(showAllDatesButton);

    //-//

    // filterByNameButton
    let filterByNameButton = ce('button');
    filterByNameButton.className = 'buttonStyle001';
    filterByNameButton.id = nameSpace + 'filterByNameButton';
    filterByNameButton.textContent = 'filterByName';
    filterByNameButton.title = 'filterByName(people, "Melissa")';
    filterByNameButton.onmouseover = function()
    {
        hoverSound();
        // audioPlay('sfx_warp_001', 1.0);
    };
    filterByNameButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByName(people, 'Melissa'));
    };
    buttonsContainer.append(filterByNameButton);

    //-//

    // filterByDateButton
    let filterByDateButton = ce('button');
    filterByDateButton.className = 'buttonStyle001';
    filterByDateButton.id = nameSpace + 'filterByDateButton';
    filterByDateButton.textContent = 'filterByDate';
    filterByDateButton.title = 'filterByDate(people, "1983/03/05")';
    filterByDateButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByDateButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByDate(people, '1983/03/05'));
    };
    buttonsContainer.append(filterByDateButton);

    //-//

    // filterBeforeDateButton
    let filterBeforeDateButton = ce('button');
    filterBeforeDateButton.className = 'buttonStyle001';
    filterBeforeDateButton.id = nameSpace + 'filterBeforeDateButton';
    filterBeforeDateButton.textContent = 'filterBeforeDate';
    filterBeforeDateButton.title = 'filterBeforeDate(people, "1982/02/05")';
    filterBeforeDateButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterBeforeDateButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterBeforeDate(people, '1982/02/05'));
    };
    buttonsContainer.append(filterBeforeDateButton);

    //-//

    // filterAfterDateButton
    let filterAfterDateButton = ce('button');
    filterAfterDateButton.className = 'buttonStyle001';
    filterAfterDateButton.id = nameSpace + 'filterAfterDateButton';
    filterAfterDateButton.textContent = 'filterAfterDate';
    filterAfterDateButton.title = 'filterAfterDate(people, "1981/02/05")';
    filterAfterDateButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterAfterDateButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterAfterDate(people, '1981/02/05'));
    };
    buttonsContainer.append(filterAfterDateButton);

    //-//

    // filterByYearButton
    let filterByYearButton = ce('button');
    filterByYearButton.className = 'buttonStyle001';
    filterByYearButton.id = nameSpace + 'filterByMonthButton';
    filterByYearButton.textContent = 'filterByYear';
    filterByYearButton.title = 'filterByYear(people, "1983")';
    filterByYearButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByYearButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByYear(people, '1983'));
    };
    buttonsContainer.append(filterByYearButton);

    //-//

    // filterByMonthButton
    let filterByMonthButton = ce('button');
    filterByMonthButton.className = 'buttonStyle001';
    filterByMonthButton.id = nameSpace + 'filterByMonthButton';
    filterByMonthButton.textContent = 'filterByMonth';
    filterByMonthButton.title = 'filterByMonth(people, "03")';
    filterByMonthButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByMonthButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByMonth(people, '03'));
    };
    buttonsContainer.append(filterByMonthButton);

    //-//

    // filterByYearMonthButton
    let filterByYearMonthButton = ce('button');
    filterByYearMonthButton.className = 'buttonStyle001';
    filterByYearMonthButton.id = nameSpace + 'filterByYearMonthButton';
    filterByYearMonthButton.textContent = 'filterByYearMonth';
    filterByYearMonthButton.title = 'filterByYearMonth(people, "1983/03")';
    filterByYearMonthButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByYearMonthButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByYearMonth(people, '1983/03'));
    };
    buttonsContainer.append(filterByYearMonthButton);

    //-//

    // filterByMonthDayButton
    let filterByMonthDayButton = ce('button');
    filterByMonthDayButton.className = 'buttonStyle001';
    filterByMonthDayButton.id = nameSpace + 'filterByMonthDayButton';
    filterByMonthDayButton.textContent = 'filterByMonthDay';
    filterByMonthDayButton.title = 'filterByMonthDay(people, "3", "5")';
    filterByMonthDayButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByMonthDayButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByMonthDay(people, '3', '5'));
    };
    buttonsContainer.append(filterByMonthDayButton);

    //-//

    // filterByDateTimeButton
    let filterByDateTimeButton = ce('button');
    filterByDateTimeButton.className = 'buttonStyle001';
    filterByDateTimeButton.id = nameSpace + 'filterByDateTimeButton';
    filterByDateTimeButton.textContent = 'filterByDateTime';
    filterByDateTimeButton.title = 'filterByDateTime(people, "1980/03/01 9:30 PM")';
    filterByDateTimeButton.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByDateTimeButton.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').innerHTML = JSON.stringify(filterByDateTime(people, '1980/03/01 9:30 PM'));
    };
    buttonsContainer.append(filterByDateTimeButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

