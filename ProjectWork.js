let numbers;
let threshold;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', function(input) {

  let numbers1 = input.trim().split(/\s+/).map(Number); // \s+ means one or more white space characters
  numbers = numbers1.map(num => num ** 2);

  // asks what the threshold is and then makes it into a variable
    rl.question('What would you like the threshold to be? ', (answer) => {
        
        threshold = Number.parseFloat(answer);
        console.log(`Threshold is ${threshold}`);

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



        console.log(`These are the numbers that are higher than ${threshold}: ${final_higher}`);
        console.log(`These are the numbers that are lower than ${threshold}: ${final_lower}`);

    });
  
});








