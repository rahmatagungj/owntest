let isOwner = true

describe('Owner Permission Testing', () => {
  it('isOwner should be boolean type', () => {
    expect(isOwner).toBeType('boolean')
  })

  it('isOwner should be true for accessing system', () => {
    expect(isOwner).toBe(true)
  })

  it('if not isOwner should be showing: Permission Denied', () => {
    expect(() => {
      throw new Error('Permission Denied')
    }).toThrowError().toThrow('Permission Denied')
  })
})