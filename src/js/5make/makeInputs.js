// makeInputs.js

function makeInputs()
{
    let inputContainer = ce('div');
    inputContainer.id = 'inputContainer';
    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'column';
    inputContainer.style.gap = '0.5px';
    inputContainer.style.border = 'solid 1px rgb(100, 100, 100)';
    inputContainer.style.margin = 2 + 'px';
    /*
    // for grid style
    inputContainer.style.display = 'grid';
    inputContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    //inputContainer.style.gap = '0.5px';
    */
    inputContainer.style.position = 'fixed';
    inputContainer.style.left = '10px';
    inputContainer.style.top = gr('leftMenu_buttonsContainer').bottom + 10;
    inputContainer.style.maxWidth = '220px';
    inputContainer.style.height = '75px';
    inputContainer.style.overflowY = 'scroll';
    inputContainer.style.zIndex = 2;
    inputContainer.style.padding = 10 + 'px';
    ba(inputContainer);

    //-//

    let filterByNameLabel = ce('div');
    filterByNameLabel.textContent = 'filterByName';
    inputContainer.append(filterByNameLabel);

    //-//

    let filterByNameInput = ce('input');
    filterByNameInput.title = "filterByName";
    filterByNameInput.value = 'Melissa';
    filterByNameInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByName(people, filterByNameInput.value));
    };
    filterByNameInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByNameInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByName(people, filterByNameInput.value));
    };
    inputContainer.append(filterByNameInput);

    //-//

    let filterByDateLabel = ce('div');
    filterByDateLabel.textContent = 'filterByDate';
    inputContainer.append(filterByDateLabel);

    //-//

    let filterByDateInput = ce('input');
    filterByDateInput.title = "filterByDate";
    filterByDateInput.title = "filterByDate";
    filterByDateInput.value = '1983/03/05';
    filterByDateInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByDate(people, filterByDateInput.value));
    };
    filterByDateInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByDateInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByDate(people, filterByDateInput.value));
    };
    inputContainer.append(filterByDateInput);

    //-//

    let filterBeforeDateLabel = ce('div');
    filterBeforeDateLabel.textContent = 'filterBeforeDate';
    inputContainer.append(filterBeforeDateLabel);

    //-//

    let filterBeforeDateInput = ce('input');
    filterBeforeDateInput.title = "filterBeforeDate";
    filterBeforeDateInput.value = '1983/03/05';
    filterBeforeDateInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterBeforeDate(people, filterBeforeDateInput.value));
    };
    filterBeforeDateInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterBeforeDateInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterBeforeDate(people, filterBeforeDateInput.value));
    };
    inputContainer.append(filterBeforeDateInput);

    //-//

    let filterAfterDateLabel = ce('div');
    filterAfterDateLabel.textContent = 'filterAfterDate';
    inputContainer.append(filterAfterDateLabel);

    //-//

    let filterAfterDateInput = ce('input');
    filterAfterDateInput.title = "filterAfterDate";
    filterAfterDateInput.value = '1980/03/01';
    filterAfterDateInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterAfterDate(people, filterAfterDateInput.value));
    };
    filterAfterDateInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterAfterDateInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterAfterDate(people, filterAfterDateInput.value));
    };
    inputContainer.append(filterAfterDateInput);

    //-//

    let filterByYearLabel = ce('div');
    filterByYearLabel.textContent = 'filterByYear';
    inputContainer.append(filterByYearLabel);

    //-//

    let filterByYearInput = ce('input');
    filterByYearInput.title = "filterByYear";
    filterByYearInput.value = '1980';
    filterByYearInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByYear(people, filterByYearInput.value));
    };
    filterByYearInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByYearInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByYear(people, filterByYearInput.value));
    };
    inputContainer.append(filterByYearInput);

    //-//

    let filterByMonthLabel = ce('div');
    filterByMonthLabel.textContent = 'filterByMonth';
    inputContainer.append(filterByMonthLabel);

    //-//

    let filterByMonthInput = ce('input');
    filterByMonthInput.title = "filterByMonth";
    filterByMonthInput.value = '05';
    filterByMonthInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByMonth(people, filterByMonthInput.value));
    };
    filterByMonthInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByMonthInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByMonth(people, filterByMonthInput.value));
    };
    inputContainer.append(filterByMonthInput);

    //-//

    let filterByYearMonthLabel = ce('div');
    filterByYearMonthLabel.textContent = 'filterByYearMonth';
    inputContainer.append(filterByYearMonthLabel);

    //-//

    let filterByYearMonthInput = ce('input');
    filterByYearMonthInput.title = "filterByYearMonth";
    filterByYearMonthInput.value = '1983/03';
    filterByYearMonthInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByYearMonth(people, filterByYearMonthInput.value));
    };
    filterByYearMonthInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByYearMonthInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByYearMonth(people, filterByYearMonthInput.value));
    };
    inputContainer.append(filterByYearMonthInput);

    //-//

    let filterByMonthDayLabel = ce('div');
    filterByMonthDayLabel.textContent = 'filterByMonthDay';
    inputContainer.append(filterByMonthDayLabel);

    //-//

    let filterByMonthDayInput = ce('input');
    filterByMonthDayInput.title = "filterByMonthDay";
    filterByMonthDayInput.value = '03/01';
    filterByMonthDayInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByMonthDay(people, filterByMonthDayInput.value));
    };
    filterByMonthDayInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByMonthDayInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByMonthDay(people, filterByMonthDayInput.value));
    };
    inputContainer.append(filterByMonthDayInput);

    //-//

    let filterByDateTimeLabel = ce('div');
    filterByDateTimeLabel.textContent = 'filterByDateTime';
    inputContainer.append(filterByDateTimeLabel);

    //-//

    let filterByDateTimeInput = ce('input');
    filterByDateTimeInput.title = "filterByDateTime";
    filterByDateTimeInput.value = '1980/03/01 9:30 PM';
    filterByDateTimeInput.onkeyup = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByDateTime(people, filterByDateTimeInput.value));
    };
    filterByDateTimeInput.onmouseover = function()
    {
        hoverSound();
        //audioPlay('sfx_warp_001', 1.0);
    };
    filterByDateTimeInput.onclick = function()
    {
        clickSound();
        //audioPlay('sfx_blip_001', 1.0);

        ge('resultDiv').textContent = JSON.stringify(filterByDateTime(people, filterByDateTimeInput.value));
    };
    inputContainer.append(filterByDateTimeInput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

