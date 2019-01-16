import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Box from './'

describe('Box component', () => {
  it('has name', () => {
    expect(Box.displayName).toBe('Box')
  })

  it('matches default snapshot', () => {
    const tree = renderer.create(<Box />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
