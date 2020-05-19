async function loadLodash() {
  return import('lodash')
}

console.log(Object.keys(loadLodash()))

describe('it', () => {
  it('works', () => {
    expect(true).to.equal(true)
  })
})
