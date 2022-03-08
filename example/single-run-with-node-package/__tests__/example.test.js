function helloWorld() {
  return 'Hello World';
}

describe("Hello World", () => {
  it("should be able to run a test", () => {
    expect(1).toEqual(1)
  })

  it("should be show hello world", () => {
    expect(helloWorld()).toEqual("Hello World")
  })

  it("should be not throwing an error", () => {
    expect(helloWorld()).not().toThrowError()
  })
})
      