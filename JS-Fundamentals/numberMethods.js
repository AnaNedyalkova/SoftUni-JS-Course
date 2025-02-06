// STATIC METHODS
// 1. Number.isInteger()
// determines whether the passed value is an integer
// syntax: Number.isInteger(value)
function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  console.log(fits(5, 10)); // Expected output: "Fits!"
  console.log(fits(5, 11)); // Expected output: "Does NOT fit!"

// 2. Number.parseFloat() реже 0-те, защото са незначещи числа?
// parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
// syntax: Number.parseFloat(string)


// 3. Number.parseInt() прави цяло чисто, маха всичко след ','
// parses a string argument and returns an integer of the specified radix or base.
// syntax: Number.parseInt(string); Number.parseInt(string, radix)

// Static properties
// 1. 

// INSTANCE METHODS
// 1. toFixed()
// 2. toString()
// 3. 
