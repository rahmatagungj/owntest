const sum = (a, b) => a + b

function isEven(num) {
  return num % 2 === 0
}

describe('Sum Math Testing', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('Returned Math Testing', () => {
  it('Function isEven should be have returned boolean', () => {
    expect(isEven(2))
      .toBeType('boolean')
      .toHaveReturned(true)

  })

  it('Function isEven should be not throwing an error', () => {
    expect(() => {
      isEven(2)
    }).not().toThrowError()
  })

  it('2 from isEven Function should be even and boolean', () => {
    expect(isEven(2))
      .toBeType('boolean')
      .toBe(true)
  })
})

describe('Function Math Testing', () => {
  it('Function isEven should be exist to call', () => {
    expect(isEven(4)).toExist()
  })
})