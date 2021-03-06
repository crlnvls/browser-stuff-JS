/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));

describe("Index page", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  test("It display a relevant title", () => {
    const heading = document.getElementById("main-title");
    expect(heading).toBeTruthy();
    expect(heading.textContent).toEqual("JavaScript");
  });
  test("It displays three divs", () => {
    const divs = document.querySelectorAll("div");
    expect(divs).toBeTruthy();
    expect(divs.length).toEqual(3);
  });
});
