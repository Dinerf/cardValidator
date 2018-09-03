module.exports.cardValidator = function cardValidator(cardNumber) {
  validateParameter(cardNumber);
  cardNumber = cardNumber.toString().split('').reverse().map(Number).map(digit).reduce((acum, number) => acum + number);
  if(cardNumber % 10 === 0) {
    return true;
  }
  return false;
};
function validateParameter(param) {
  Number(param.toString().trim());
  if (param === '') {
    throw new Error('Empty input');
  } else if(isNaN(param)) {
    throw new TypeError('Accepts only numeric digits');
  }
}
function digit(number, index) {
  index % 2 !== 0 ? number *= 2 : number;
  number > 9 ? number -=9 : number;
  return number;
}