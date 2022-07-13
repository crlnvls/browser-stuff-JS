/**
 * @jest-environment jsdom
 */

const { uptadeNewButtonText } = require("../assets/scripts/index");

describe("uptadeNewButtonText", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = "<button id='new-button'></button>";
  });

  test("It updates the button", () => {
    uptadeNewButtonText("test");
    const button = document.querySelector("#new-button");
    expect(button.textContent).toEqual("test");
  });
});
