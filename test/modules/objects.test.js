describe("objects.js", () => {
  let dog
  try {
    dog = goodDoggo
  } catch (e) { console.error(e) }
  it("Has a name property", () => {
    chai.assert.isString(dog.name, "Be sure to use the string data type")
  })
  it("Has a legs property", () => {
    chai.assert.isNumber(dog.legs, "Be sure to use a numerical data type")
  })
  it("Has a tail property", () => {
    chai.assert.isBoolean(dog.tail, "Be sure to use a boolean value")
  })
  it("Has a likes property", () => {
    chai.assert.isTrue(dog.likes.length >= 3, "Be sure to use the array data type")
  })
  //still need to figure out dotnation test
})

