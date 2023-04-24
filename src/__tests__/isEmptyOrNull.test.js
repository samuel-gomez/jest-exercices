import isEmptyOrNull, {
  isEmptyObject,
  isEmptyArray,
  isNullOrUndefined,
} from "../isEmptyOrNull";

describe("isEmptyOrNull", () => {
  test.each`
    elt                   | expected
    ${null}               | ${true}
    ${undefined}          | ${true}
    ${""}                 | ${true}
    ${{}}                 | ${true}
    ${[]}                 | ${true}
    ${"5"}                | ${false}
    ${{ test: "test" }}   | ${false}
    ${9}                  | ${false}
    ${["9.99"]}           | ${false}
    ${new Blob(["blob"])} | ${false}
    ${new Blob()}         | ${false}
  `("Should return $expected when elt: $elt", ({ elt, expected }) => {
    const result = isEmptyOrNull(elt);
    expect(result).toEqual(expected);
  });
});

describe("isEmptyObject", () => {
  test.each`
    elt                   | expected
    ${{}}                 | ${true}
    ${{ test: "test" }}   | ${false}
    ${new Blob(["blob"])} | ${false}
  `("Should return $expected when elt: $elt", ({ elt, expected }) => {
    const result = isEmptyObject(elt);
    expect(result).toEqual(expected);
  });
});

describe("isEmptyArray", () => {
  test.each`
    elt         | expected
    ${[]}       | ${true}
    ${["9.99"]} | ${false}
  `("Should return $expected when elt: $elt", ({ elt, expected }) => {
    const result = isEmptyArray(elt);
    expect(result).toEqual(expected);
  });
});

describe("isNullOrUndefined", () => {
  test.each`
    elt          | expected
    ${null}      | ${true}
    ${undefined} | ${true}
    ${"test"}    | ${false}
  `("Should return $expected when elt: $elt", ({ elt, expected }) => {
    const result = isNullOrUndefined(elt);
    expect(result).toEqual(expected);
  });
});
