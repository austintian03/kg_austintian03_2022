//helper function to convert a single digit to phonetic equivalent
const digitToWord = n => {
    let word;
    switch(parseInt(n)) {
        case 0:
            word = 'Zero';
            break;
        case 1:
            word = 'One';
            break;
        case 2:
            word = 'Two';
            break;
        case 3: 
            word = 'Three';
            break;
        case 4:
            word = 'Four';
            break;
        case 5:
            word = 'Five';
            break;
        case 6:
            word = 'Six';
            break;
        case 7:
            word = 'Seven';
            break;
        case 8:
            word = 'Eight';
            break;
        case 9:
            word = 'Nine';
            break;
        default:
            word = NaN;
    }
    return word;
}; 

//solution 
const nums = process.argv.slice(2).map(n => +n); //retrieve numbers from commandline arguments
const result = nums.map(n => { //array of strings representing phonetic equivalents
    if (n === 0) {
        return "Zero";
    }

    let digit;
    let phonetic = '';
    while (n > 0) {
        digit = digitToWord(n % 10);
        phonetic = digit + phonetic;
        n = Math.floor(n / 10);
    }
    return phonetic;
});
console.log(result.toString());