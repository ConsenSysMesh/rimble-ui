import Select from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Select component sanity", () => {
  it("has name", () => {
    expect(Select.displayName).toBe("Select");
  });

  it("matches default snapshot", () => {
    const component = shallow(
      <Select
        items={["Wandering Thunder", "Black Wildflower", "Ancient Paper"]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Select
          items={["Wandering Thunder", "Black Wildflower", "Ancient Paper"]}
        />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
