import { REACT_APP_BACKEND_DOMAIN } from "./common";

// BEFORE USING THIS TEST YOU NEED TO "export { REACT_APP_BACKEND_DOMAIN };" IN common.js
describe("Environment Variables", () => {
  it("should have REACT_APP_BACKEND_DOMAIN defined", () => {
    console.log("REACT_APP_BACKEND_DOMAIN:", REACT_APP_BACKEND_DOMAIN);
    expect(REACT_APP_BACKEND_DOMAIN).toBeDefined();
  });

  it("should have the correct value for REACT_APP_BACKEND_DOMAIN", () => {
    const expectedValue = "http://localhost:8000";
    expect(REACT_APP_BACKEND_DOMAIN).toBe(expectedValue);
  });
});
