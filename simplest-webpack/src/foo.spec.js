import('is-jess').then((result) => {
  describe('it', () => {
    it('works', (done) => {
        const jess = result.default
        done(expect(jess).to.equal(1))
    })
  })
})