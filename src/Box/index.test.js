import React from 'react'
import renderer from 'react-test-renderer'

import Box from './'

describe('Box component', () => {
  it('Has name', () => {
    expect(Box.displayName).toBe('Box')
  })

  it('has default styles', () => {
    const tree = renderer.create(<Box />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('box-sizing', 'border-box')
  })
})