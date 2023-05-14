import * as React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";

import MyCounter from "../Components/App";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<MyCounter />);
  });
});
