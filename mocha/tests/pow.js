describe("pow", function() {

  it("2 raised to power 3 is 8", function() {
//http://chaijs.com/api/assert/
    assert.equal(pow(2, 3), 8);
  });

  it("2 raised to power 4 is 16", function() {
    assert.equal(pow(2, 4), 16);
  });
  it("3 raised to power 3 is 27", function() {
    assert.equal(pow(3, 3), 27);
  });

  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });
    
// ... more tests to follow here, both describe and it can be added
  describe("check n at the integer and at the positive number", function() {
    it("for negative n the result is NaN", function() {
      assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });
  });
  
// ... more tests to follow here, both describe and it can be added
  describe("raises x to power n", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });  
  
});