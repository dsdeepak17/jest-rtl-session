import { formatUserName } from "./formatUserName";

describe('test formatUserName function', () => {

  it('should add @ with any username passed to it', () => {
    expect(formatUserName('john')).toBe('@john')
  })

  it('should not add @ with a username that already has it', () => {
    expect(formatUserName('@john')).toBe('@john')
  })
})