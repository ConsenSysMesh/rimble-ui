import ToastMessage from './'
import styled, { keyframes } from 'styled-components'

describe('ToastMessage component sanity', () => {
  it('has name', () => {
    expect(ToastMessage.displayName).toBe('ToastMessage')
  })
})
