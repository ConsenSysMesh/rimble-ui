import Button from './'

describe('Button component sanity', () => {
  it('has name', () => {
    expect(Button.displayName).toBe('Button')
  })

  it('matches default snapshot', () => {
    const component = render(<Button />)
    expect(component).toMatchSnapshot()
  })
})
