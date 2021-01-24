const moment = require('moment');

// singleline function with default parameter
const random = (num = 50) => Math.floor(Math.random() * num);

function validateBDay(bDayStr) {
    let bDayObj = moment(bDayStr, 'MM/DD/YY');
    if (bDayObj.isValid()) {
        console.log('\nOops, seems that you entered a wrong value.\n' + 
        'Lets try this again :)\n'
        );
        return false;
    } else {
        return true;
    }
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
    let index = Math.floor( bDayObj.date() / map[month].day );

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


// factory function
function generateUserProfile(bDayStr) {
    let bDayObj = moment(bDayStr, 'MM/DD/YY');
    let _age = getAge(bDayObj);
    let _sign = getSign(bDayObj);
    let _element = getElement(_sign);

    // short-hand assignment, this keyword, basic getters & methods
    return {
        _age,
        _sign,
        _element,
        get age() { return this._age; },
        get sign() { return this._sign; },
        get element() { return this._element; },
    }
}



let profile = generateUserProfile('07/26/91');
console.log(profile);
console.log(profile.age);
console.log(profile.sign);
console.log(profile.element);

module.exports = {
    validate,
    validateBDay,
    generateUserProfile
}