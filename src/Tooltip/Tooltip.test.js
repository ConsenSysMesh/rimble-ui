import Tooltip from './'

describe('Tooltip component sanity', () => {
  it('has name', () => {
    expect(Tooltip.displayName).toBe('Tooltip')
  })

  it('matches default snapshot', () => {
    const component = render(<Tooltip />)
    expect(component).toMatchSnapshot()
  })
})
