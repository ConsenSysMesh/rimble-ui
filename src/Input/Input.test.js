import Input from './'

describe('Input component sanity', () => {
  it('has name', () => {
    expect(Input.displayName).toBe('Input')
  })

  it('matches default snapshot', () => {
    const component = render(<Input />)
    expect(component).toMatchSnapshot()
  })
})
