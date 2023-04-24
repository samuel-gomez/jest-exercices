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
});

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : {}                 => expected : true
    called with : { test: "test" }   => expected : false
    called with : new Blob(["blob"]) => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
describe("isEmptyObject", () => {});

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : []       => expected : true
    called with : ["9.99"] => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
describe("isEmptyArray", () => {});

/**
   * Tester la fonction et vérifier les valeurs et résultats suivants
    called with : null      => expected : true
    called with : undefined => expected : true
    called with : "test"    => expected : false
   * Méthodes de Jest à utiliser : each, toEqual
   */
describe("isNullOrUndefined", () => {});
