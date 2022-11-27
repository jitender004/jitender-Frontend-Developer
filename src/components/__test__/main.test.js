import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Main from "../Main";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Main></Main>, div);
});
