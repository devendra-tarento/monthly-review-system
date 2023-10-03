import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { RecoilRoot } from "recoil";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
    </RecoilRoot>
  ),
];

// addDecorator((story) => (
//   <RecoilRoot>
//     <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
//   </RecoilRoot>
// ));
