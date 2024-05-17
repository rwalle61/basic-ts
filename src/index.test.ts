import { main } from ".";

describe("main", () => {
  it("returns hello", () => {
    expect(main()).toBe("hello world!");
  });
});
