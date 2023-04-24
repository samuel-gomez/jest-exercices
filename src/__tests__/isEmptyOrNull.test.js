import isEmptyOrNull, {
  isEmptyObject,
  isEmptyArray,
  isNullOrUndefined,
} from "../isEmptyOrNull";

describe("isEmptyOrNull", () => {
  /**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : null               => expected : true
    called with : undefined          => expected : true
    called with : ""                 => expected : true
    called with : {}                 => expected : true
    called with : []                 => expected : true
    called with : "5"                => expected : false
    called with : { test: "test" }   => expected : false
    called with : 9                  => expected : false
    called with : ["9.99"]           => expected : false
    called with : new Blob(["blob"]) => expected : false
    called with : new Blob()         => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
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

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : {}                 => expected : true
    called with : { test: "test" }   => expected : false
    called with : new Blob(["blob"]) => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
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

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : []       => expected : true
    called with : ["9.99"] => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
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

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : null      => expected : true
    called with : undefined => expected : true
    called with : "test"    => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
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
