const prompt = require('prompt-sync')({sigint: true});
const {validate, validateBDay, generateUserProfile} = require('./helpers');

let input = '';
let repeat = true;
let userProfile = {};

const welcomeStr = 
`
==========================================================
Welcome to Mixed Messages!!!

   ______            ______            ______
  /\\_____\\          /\\_____\\          /\\_____\\          ____
 _\\ \\__/_/_         \\ \\__/_/_         \\ \\__/_/         /\\___\\
/\\_\\ \\_____\\        /\\ \\_____\\        /\\ \\___\\        /\\ \\___\\
\\ \\ \\/ / / /        \\ \\/ / / /        \\ \\/ / /        \\ \\/ / /
 \\ \\/ /\\/ /          \\/_/\\/ /          \\/_/_/          \\/_/_/
  \\/_/\\/_/              \\/_/

  - art by Michael Naylor (https://www.asciiart.eu/art-and-design/escher)



Lets analyze the stars and shed some light into your day.

==========================================================
`;


// Start Program Execution:
console.log(welcomeStr);

do {
    input = prompt('Enter your Birthday (MM/DD/YY):   ');
    if (!validateBDay(input)) continue;
    userProfile = generateUserProfile(input);

    // get age and element
    console.log(`\nCongrats on making it to a healthy ${userProfile.age} years, you ${userProfile.sign} you!\n`);

    console.log(`Here is your daily horoscope:\n`);
    console.log(userProfile.getDaily);

    input = prompt('Would you like to know your Fortune in the Realm of Wealth? (y/n):   ');
    if (!validate(input)) continue;
    if (['Y', 'y'].includes(input)) console.log(userProfile.getMoney);

    input = prompt('How about your Fortune in Love? (y/n):   ')
    if (!validate(input)) continue;
    if (['Y', 'y'].includes(input)) console.log(userProfile.getLove);

    console.log('\nOverall it seems like a good day ;)\n\n');
    console.log('But wait! The stars have shifted again already...\n');

    input = prompt('Would you like to see what they say now? (y - to repeat, n - to exit):   ');
    if (!validate(input)) continue;
    repeat = ['Y', 'y'].includes(input);
    console.log('\n');
} while (repeat);

