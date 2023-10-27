import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
    .stdout()
    .command(['hello', 'friend', '--from=oclif'])
    .it('runs hello cmd', (ctx) => {
      expect(ctx.stdout).to.contain('hello friend from oclif!')
    })

  test
    .stdout()
    .command(['hello', 'friend', '--from=zero'])
    .exit(0)
    .it('exits with code zero if from is zero', () => {
      // exit is the expectation
    })

  test
    .stdout()
    .command(['hello', 'friend', '--from=zero'])
    .exit(0)
    .it('should stop after this.exit', (ctx) => {
      expect(ctx.stdout).to.not.contain('should have exited with zero')
    })

  test
    .stdout()
    .command(['hello', 'friend', '--from=one'])
    .exit(1)
    .it('exits with code one if from is one', (ctx) => {
      expect(ctx.stdout).to.not.contain('should have exited with one')
    })
})
