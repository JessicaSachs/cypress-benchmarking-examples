
describe('it', () => {
  it('works', (done) => {
    import('is-jess').then((result) => {
      const jess = result.default
      done(expect(jess).to.equal(1))
    })
  })
})
