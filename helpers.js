const moment = require('moment');

function validateBDay(bDayStr) {
    let bDayObj = moment(bDayStr, 'MM/DD/YY');
    return bDayObj.isValid();
}
function validate(input) {
    let acceptableValues = ['Y', 'y', 'N', 'n'];
    if (!acceptableValues.includes(input)) {
        console.log('\nOops, seems that you entered a wrong value.\n' + 
        'Lets try this again :)\n'
        );
        return false;
    } else {
        return true;
    }
}

function getAge(bDayObj) {
    let today = moment();
    return today.diff(bDayObj, 'years');
}
function getSign(bDayObj) {
    let map = [
        {day: 21, sign: ['Capricorn', 'Aquarius']},
        {day: 20, sign: ['Aquarius', 'Pisces']},
        {day: 21, sign: ['Pisces', 'Aries']},
        {day: 21, sign: ['Aries', 'Taurus']},
        {day: 22, sign: ['Taurus', 'Gemini']},
        {day: 22, sign: ['Gemini', 'Cancer']},
        {day: 23, sign: ['Cancer', 'Leo']},
        {day: 22, sign: ['Leo', 'Virgo']},
        {day: 24, sign: ['Virgo', 'Libra']},
        {day: 24, sign: ['Libra', 'Scorpio']},
        {day: 23, sign: ['Scorpio', 'Sagittarius']},
        {day: 23, sign: ['Sagittarius', 'Capricorn']}
    ];
    let month = bDayObj.month();
    let date = bDayObj.date();
    let index = Math.floor(date / map[month].day);
    console.log(`Month: ${month}, Date: ${date}, Index: ${index}`)
    return map[month].sign[index];
}
function getElement(sign) {
    let map = {
        fire: ['Aries', 'Leo', 'Sagittarius'],
        water: ['Cancer', 'Scorpio', 'Pisces'],
        earth: ['Taurus', 'Virgo', 'Capricorn'],
        air: ['Gemini', 'Libra', 'Aquarius']
    };
    for (let element in map) {
        if (map[element].includes(sign)) return element;
    }
}

let bd = moment('03/21/91', 'MM/DD/YY');
console.log(getAge(bd));
console.log(getSign(bd));
console.log(getElement('Aquarius'));