import Table from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Table component sanity", () => {
  it("has name", () => {
    expect(Table.displayName).toBe("Table");
  });

  it("matches default snapshot", () => {
    const component = render(<Table />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
