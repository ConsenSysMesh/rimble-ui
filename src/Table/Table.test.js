import Table from './'

describe('Table component sanity', () => {
  it('has name', () => {
    expect(Table.displayName).toBe('Table')
  })

  it('matches default snapshot', () => {
    const component = render(<Table />)
    expect(component).toMatchSnapshot()
  })
})
