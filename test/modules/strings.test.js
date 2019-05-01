describe("Strings.js", () => {
  describe("Uppercase Function", () => {
    let uppercase = window['uppercase']
    it("works with simple input", () => {
      chai.assert.strictEqual(uppercase("i"), "I", "Be sure to uppercase the letter i")
    })

    it("Works with more than one character input", () => {
      chai.assert.strictEqual(uppercase("hello i call myself joan"), "hello I call myself joan", "Be sure to uppercase the letter i")
    })

    it("Only uppercases I in reference to oneself", () => {
      chai.assert.strictEqual(uppercase("When i went to the mall i bought a pair of shoes."), "When I went to the mall I bought a pair of shoes.", "You can't uppercase every letter i")
    })
  })

  describe("LetterCount Function", () => {
    let history
    try {
      history = jsHistory
    } catch (e) { console.error(e) }
    let letterCount = window['letterCount']
    it("Returns a number", () => {
      chai.assert.isNumber(letterCount("Javascript", "a"), "Be sure to return a number")
    })

    it("How many a's case sensitive", () => {
      chai.assert.strictEqual(letterCount(history, "a"), 51, "Be sure to count all lowercase a's")
    })

    it("How many a's and A's - case insensitive", () => {
      chai.assert.strictEqual(letterCount(history, "a", true), 52, "Be sure to count the uppercase A's as well!")
    })
  })

  describe("Capitalizer Function", () => {
    let str
    try {
      str = text
    } catch (e) { console.error(e) }
    it("Returns a string", () => {
      chai.assert.isString(capitalizer(str, "a"), "Be sure to return a string")
    })

    it("Capitalizes all instances of the target", () => {
      chai.assert.strictEqual(capitalizer(str, "scream"), "I SCREAM, you SCREAM, we all SCREAM for icecream", "Be sure to capitalize all instances of the target!")
    })

    it("Capitalizes all instances of the target", () => {
      chai.assert.strictEqual(capitalizer("How much wood could a woodchuck chuck if a woodchuck could chuck wood", "wood"), "How much WOOD could a WOODchuck chuck if a WOODchuck could chuck WOOD", "Be sure to capitalize all instances of the target!")
    })

  })
})