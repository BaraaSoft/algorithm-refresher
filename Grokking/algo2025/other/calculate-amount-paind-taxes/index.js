// 2303. Calculate Amount Paid in Taxes

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {


    let total = 0;
    let currIncome = income


    for (let i = 0; i < brackets.length; i++) {
        const [bracket, percentage] = brackets[i];
        const [prevBracket,] = (i == 0) ? [0] : brackets[i - 1];

        const tax = bracket - prevBracket;

        if (currIncome >= tax) total += tax * percentage / 100
        else total += currIncome * percentage / 100;

        currIncome -= tax
        if (currIncome < 0) break;
    }

    return total;
};
