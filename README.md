isnhsno
=======

Validate an NHS number. Code taken from **[https://ukarch.wordpress.com/2010/11/07/javascript-nhs-number-validator/](https://ukarch.wordpress.com/2010/11/07/javascript-nhs-number-validator/)**

usage

    var isnhsno = require('./index');
    isnhsno('0169988856'); // returns 'true'
    isnhsno('0169988851'); // returns 'false'
    isnhsno('187 198 7148'); // returns 'true'
    isnhsno('187-198-7148'); // returns 'true'
