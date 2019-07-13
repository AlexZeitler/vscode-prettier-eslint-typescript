'use strict'

import 'should'
import { getEnv } from '../src/GetEnvTyped'

describe('getEnv', (): void => {
  describe('when requesting a string value from environment', (): void => {
    it('should return a string value', (done): void => {
      process.env.FOO = 'foo'
      const foo = getEnv('FOO', String)
      foo.should.equal('foo')
      return done()
    })
  })
})
