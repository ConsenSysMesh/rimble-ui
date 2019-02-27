import Tooltip from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Tooltip component sanity", () => {
  it("has name", () => {
    expect(Tooltip.displayName).toBe("Tooltip");
  });

  it("matches default snapshot", () => {
    const component = render(<Tooltip />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Tooltip />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
