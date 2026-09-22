let numbers;
let threshold;
let operator;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', function(input) {

  let numbers1 = input.trim().split(/\s+/).map(Number); // \s+ means one or more white space characters

  rl.question('What operator would you like to use (square or sqrt)? ', (operatorInput) => {
    operator = operatorInput.trim().toLowerCase();

    if (operator === 'square' || operator === 'squared') {
      numbers = numbers1.map(num => num ** 2);
    } else if (operator === 'sqrt' || operator === 'square root') {
      numbers = numbers1.map(num => Math.sqrt(num));
    } else {
      console.log('Choose "square" or "sqrt" ');
      rl.close();
      return;
    }

    console.log(`Operator is ${operator}`);

    rl.question('What would you like the threshold to be? ', (answer) => {
        
        threshold = Number.parseFloat(answer);
        const round = number => Number(number.toFixed(3));

        console.log(`Threshold is ${round(threshold)}`);

        function higher_lower(list, threshold) {
            let list_higher = []
            let list_lower = []
            let list_length = list.length
            for (let i=0; i<list_length; i++) {
                list[i]>= threshold ? list_higher.push(list[i]) : list_lower.push(list[i])
            }
            return [list_higher, list_lower]
        }

        let [final_higher, final_lower] = higher_lower(numbers, threshold)



        const formattedHigher = final_higher.map(round);
        const formattedLower = final_lower.map(round);

        console.log(`These are the numbers that are higher than ${round(threshold)}: ${formattedHigher}`);
        console.log(`These are the numbers that are lower than ${round(threshold)}: ${formattedLower}`);

        rl.close();
    });
  });
});




