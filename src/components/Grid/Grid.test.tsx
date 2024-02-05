import { render } from "@/utils/tests/helpers";
import { Grid } from "./Grid";

describe("<Grid />", () => {
  it("should render correctly", () => {
    const { container } = render(<Grid>Children</Grid>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(15.625rem,1fr))] gap-md my-md"
      >
        Children
      </div>
    `);
  });
});
