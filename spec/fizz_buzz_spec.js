describe('FizzBuzzChallenge', function() {

  it('should return 1 if number = 1', function() {
    expect(fizzBuzzChallenge(1)).toEqual(1);
  });

  it("should return 'fizz' if number = 3", function() {
    expect(fizzBuzzChallenge(3)).toEqual('fizz');
  });

  it ("should return 'buzz' if number = 5", function() {
    expect(fizzBuzzChallenge(5)).toEqual('buzz');
  });

  it ("should return 'fizz buzz' if number = 15", function() {
    expect(fizzBuzzChallenge(15)).toEqual('fizz buzz');
  });
});
