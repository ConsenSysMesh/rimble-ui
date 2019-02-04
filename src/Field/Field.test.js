import Field from './'

describe('Field component sanity', () => {
  it('has name', () => {
    expect(Field.displayName).toBe('Field')
  })

  it('matches default snapshot', () => {
    const component = render(<Field />)
    expect(component).toMatchSnapshot()
  })
})
