let n = 0;
let m = 0;
let sum = 0;

n = parseInt(prompt('Number N'));
m = parseInt(prompt('Number M'));

const skip = confirm('skip an odd?'); 

if (isNaN(n) || isNaN(m)) {
    console.log('Please input a number.')
} else {
    console.log(parseInt(n));
    console.log(parseInt(m));
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    for (let i = min; i <= max; i++){
        if (skip) {
            if (i % 2 === 0){
                sum += 0
            } else {
                sum += i
            }
        } else {
            sum += i;
        }
    }
    console.log('sum: ', sum)
}