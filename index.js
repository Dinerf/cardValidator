module.exports.cardValidator = function cardValidator(cardNumber) {
  cardNumber = validateParameter(cardNumber).toString().split('').reverse().map(Number).map(digit).reduce((acum, number) => acum + number);
  return cardNumber % 10 === 0 ? true : false;
};
function digit(number, index) {
  index % 2 !== 0 ? number *= 2 : number;
  return number > 9 ? number -=9 : number;
} 
function validateParameter(param) {
  if(param == null) {
    throw new Error('Empty input');
  } else if (typeof(param) !== 'number'){
    throw new TypeError('Not a number')
  } else if(param.toString().match(/\D/)) {
    throw new TypeError('Accepts only numeric digits');
  } else if(param < 10) {
    throw new RangeError('Card number incomplete')
  }
  return param;
}