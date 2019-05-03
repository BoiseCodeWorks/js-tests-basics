describe("numbers.js", () => {
  let add = window['add']

  describe("Add Function", () => {
    it("Returns the correct number", () => {
      chai.assert.strictEqual(add(4, 5), 9, "Be sure to use the addition operator")
    })
  })

  describe("isEven Function", () => {
    it("The number 4 returns true", () => {
      chai.assert.isTrue(isEven(4), "Be sure to return true for even numbers")
    })
    it("The number 5 returns false", () => {
      let _sut = isEven(5)
      chai.assert.isTrue(!_sut && typeof _sut == 'boolean', "Be sure to return false for odd numbers")
    })
  })

  describe("NumberGenerator Function", () => {
    it("Returns a whole number", () => {
      chai.assert.isTrue(isInteger(numberGenerator(0, 10)), "Be sure to return a whole number")
    })
    it("Return number is within the provided range", () => {
      chai.assert.isTrue((numberGenerator(10, 100) >= 10 && numberGenerator(10, 100) <= 100), "Be sure to include the provided numbers in your range")
    })
    it("Function still works given that num1 isn't necessarily the smallest number", () => {
      chai.assert.isTrue((numberGenerator(100, 10) >= 10 && numberGenerator(100, 10) <= 100), "Be sure to include the provided numbers in your range")
    })
  })
})

//throw .toFixed in there somewhere
//math.Random
function isInteger(num) {
  return !("" + num).includes('.')
}