function fizzBuzzChallenge(number){

  if (number % 3 == 0) {
    return 'fizz';
  } else if (number % 5 == 0) {
    return 'buzz';
  } else if (number % 15 == 0) {
    return 'fizz buzz';
  } else {
    return number;
  };
};
