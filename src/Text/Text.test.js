import Text from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Text component sanity", () => {
  it("has name", () => {
    expect(Text.displayName).toBe("Text");
  });

  it("matches default snapshot", () => {
    const component = render(<Text />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
