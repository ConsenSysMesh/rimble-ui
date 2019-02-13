import Radio from './'

describe('Radio component sanity', () => {
  it('has name', () => {
    expect(Radio.displayName).toBe('Radio')
  })

  it('matches default snapshot', () => {
    const component = render(<Radio />)
    expect(component).toMatchSnapshot()
  })
})
