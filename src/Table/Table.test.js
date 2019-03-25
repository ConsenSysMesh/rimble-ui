import Table from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Table component sanity', () => {
  it('has name', () => {
    expect(Table.displayName).toBe('Table');
  });

  it('matches default snapshot', () => {
    const component = render(
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
