import Pill from "./";

describe("Pill component sanity", () => {
  it("has name", () => {
    expect(Pill.displayName).toBe("Pill");
  });

  it("matches default snapshot", () => {
    const component = render(<Pill color={"blue"} />);
    expect(component).toMatchSnapshot();
  });
});
