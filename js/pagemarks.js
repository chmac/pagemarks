'use strict';

function pagemarksMain() {

    var Shuffle = window.Shuffle;
    var element = document.querySelector('.pagemarks-shuffle-container');

    const shuffleInstance = new Shuffle(element, {
        itemSelector: '.pagemarks-item',
        sizer: '.pagemarks-shuffle-container:first-child'
    });

    const inputForm = $('#pagemarks-filter');
    inputForm.on('submit', null, shuffleInstance, updateFilter);
}



function updateFilter(event) {
    event.preventDefault();
    const s = getValueFromInput('pagemarks-filter input', Shuffle.ALL_ITEMS);
    console.log("filter changed - " + s);
    event.data.filter(s);
    return false;
}

function getValueFromInput(pInputFieldName, pDefault) {
    let result = pDefault;
    const v = $('#' + pInputFieldName).val();
    if (typeof (v) === 'string' && v.trim().length > 0) {
        result = v.trim();
    }
    return result;
}