const prompt = require('prompt-sync')({sigint: true});
let repeat = true;
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

let input = prompt('Enter your Birthday (MM/DD/YY):   ');

// get age and element
console.log(`\nCongrats on making it to a healthy X years, you Y you!\n`);
do {
    // generate Daily Horoscope
    console.log(`Your horoscope\n`);

    input = prompt('Would you like to know your Fortune in the Realm of Wealth? (y/n):   ');
    // validate input
    console.log(`\nYour money fortune\n`);
    input = prompt('How about your Fortune in Love? (y/n):   ')
    // validate input
    console.log('\nOverall seems like a good day.\n\n');
    input = prompt('But wait! The stars have shifted again already...' + 
    '\nWould you like to see what they say now?' + 
    '\n(y - to repeat, n - to exit):   '
    )
    // validate input

    repeat = ['Y', 'y'].includes(input);
} while (repeat);
