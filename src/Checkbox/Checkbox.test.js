import Checkbox from './'

describe('Checkbox component sanity', () => {
  it('has name', () => {
    expect(Checkbox.displayName).toBe('Checkbox')
  })

  it('matches default snapshot', () => {
    const component = render(<Checkbox />)
    expect(component).toMatchSnapshot()
  })
})
