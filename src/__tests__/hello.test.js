import { hello } from "../hello";

test("hello world", () => {
  expect(hello()).toBe("world");
});
