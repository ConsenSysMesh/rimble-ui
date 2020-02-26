import Select from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

const selectOptions = [
  { value: '123', label: 'One Two Three' },
  { value: 'abc', label: 'A B C' },
]

describe('Select component sanity', () => {
  it('has name', () => {
    expect(Select.displayName).toBe('Select')
  })

  it('matches default snapshot', () => {
    const component = shallow(<Select options={selectOptions} />)
    expect(component).toMatchSnapshot()
  })

  // it('matches themed snapshot', () => {
  //   const component = render(
  //     <ThemeProvider theme={theme}>
  //       <Select items={selectOptions} />
  //     </ThemeProvider>
  //   )

  //   expect(component).toMatchSnapshot()
  // })
})
