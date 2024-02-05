import { render } from "@/utils/tests/helpers";
import { Divider } from "./Divider";

describe("<Divider />", () => {
  it("should render correctly", () => {
    const { container } = render(<Divider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <hr
        class="mt-xxl mx-auto mb-md h-[1px] bg-[rgba(181,181,181,0.3)] border-none min-md:mt-[8.75rem] min-md:mb-xxl"
      />
    `);
  });
});
