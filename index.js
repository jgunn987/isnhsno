module.exports = function (number) {
  var isValid = false;
  number = number
    .replace(/-/g, '')
    .replace(/ /g, '');

  console.log(number);
  if (number.length == 10) {
    var total = 0;
    for (var i = 0; i <= 8; i++) {
      total += (parseInt(number.substr(i, 1)) * (10 - i));
    }

    var checkDigit = (11 - (total % 11));

    if (checkDigit == 11) { 
      checkDigit = 0; 
    }

    if (checkDigit == number.substr(9, 1)) { 
      isValid = true; 
    }
  }

  return isValid;
}
