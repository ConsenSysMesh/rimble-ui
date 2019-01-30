import Select from './'

describe('Select component sanity', () => {
  it('has name', () => {
    expect(Select.displayName).toBe('Select')
  })

  it('matches default snapshot', () => {
    const component = shallow(<Select items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper',]} />)
    expect(component).toMatchSnapshot()
  })
})
