import { ConvertToSpaces } from './convert-to-spaces.pipe'
import { expect } from 'chai'

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpaces()
    expect(pipe).to.exist
  })

  fit('replaces passed character with space', () => {
    const pipe = new ConvertToSpaces()
    expect(pipe.transform('any-text', '-')).to.be.equal('any text')
    // expect(pipe.transform('any-text', '-')).toBe('any text')
  })
})
