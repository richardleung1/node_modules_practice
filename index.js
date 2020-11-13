const {favFood} = require('./myModule.js')

function printFood(array) {
    array.forEach(function(food) {
        console.log(food);
    })
}

printFood(favFood)

// Commander
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');
 
program.parse(process.argv);
 
console.log(`cheese: ${program.cheese}`);

// Classnames
var classNames = require('classnames');
console.log(classNames('foo', 'bar'))

// Colors
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

var colors = require('colors/safe');
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass
 