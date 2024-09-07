module.exports = function reverse (n) {

        let reversedString = n.toString().split('').reverse().join('');

        let reversedn = parseInt(reversedString, 10);

        return reversedn;
}
