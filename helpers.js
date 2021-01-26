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

function generateMessages(luckyNum, element) {
    let result = {};
    let phrases = {
        daily: [
            ['come across many', 'avoid all', 'seek out new', 'think on missed'],
            ['loved ones', 'the good in your life', 'your goals', 'your health'],
        ],
        money: [
            ['save', 'invest', 'gamble', 'spend'],
            ['new', 'full', 'half', 'blue'],
        ],
        love: [
            ['a special', 'new', 'a passionate'],
            ['humble', 'curious', 'playful', 'suspicious'],
            ['adventures', 'quiet spaces', 'favorite pass times']
        ]
    };

    result.daily = `
    Today you should ${phrases.daily[0][random(4)]} opportunities. 
    Remember to focus on ${phrases.daily[1][random(4)]} as you go about your day.
    Also, keeo an eye out for your lucky number: ${luckyNum}.
    `;
    result.money = `
    Given that you are an ${element} sign, it will be best to ${phrases.money[0][random(4)]} your money... 
    Or at least till the next ${phrases.money[1][random(4)]} moon.
    `;
    result.love = `
    There is ${phrases.love[0][random(3)]} love in your near future. 
    Keep a ${phrases.love[1][random(4)]} heart and seek out ${phrases.love[2][random(3)]}.
    `;

    return result;
}

// factory function
function generateUserProfile(bDayStr) {
    let bDayObj = moment(bDayStr, 'MM/DD/YY');
    let _age = getAge(bDayObj);
    let _sign = getSign(bDayObj);
    let _element = getElement(_sign);
    let _num = random();
    // destructured assignment
    let {daily, money, love} = generateMessages(_num, _element);

    // short-hand assignment, this keyword, basic getters
    return {
        _age,
        _sign,
        _element,
        _num,
        _messages: {daily, money, love},
        get age() { return this._age; },
        get sign() { return this._sign; },
        get element() { return this._element; },
        get num() { return this._num; },
        get getDaily() { return this._messages.daily; },
        get getMoney() { return this._messages.money; },
        get getLove() { return this._messages.love; },
    }
}

module.exports = {
    validate,
    validateBDay,
    generateUserProfile
}