import { calculeMoyenne, calculateTotal } from "../calculs";

describe("calculeMoyenne", () => {
  /**
   * Tester avec la valeur [10, 12, 15, 18] et comme valeur attendue 13.75
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 13.75 when to be called with [10, 12, 15, 18]", () => {
    expect(calculeMoyenne([10, 12, 15, 18])).toEqual(13.75);
  });

  /**
   * Tester avec la valeur [0, 0, 0, 0] et comme valeur attendue 0
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 0 when to be called with [0, 0, 0, 0]", () => {
    expect(calculeMoyenne([0, 0, 0, 0])).toEqual(0);
  });

  /**
   * Tester avec la valeur [17, 20, 19, 18] et comme valeur attendue 18.5
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 18.5 when to be called with [17, 20, 19, 18]", () => {
    expect(calculeMoyenne([17, 20, 19, 18])).toEqual(18.5);
  });
});

describe("calculateTotal", () => {
  /**
   * Tester avec la valeur 5 et 6 et comme valeur attendue 30
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 30 when to be called with 5,6", () => {
    expect(calculateTotal(5, 6)).toEqual(30);
  });

  /**
   * Tester avec la valeur 5 et 0 et comme valeur attendue 0
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 0 when to be called with 5,0", () => {
    expect(calculateTotal(5, 0)).toEqual(0);
  });

  /**
   * Tester sans paramètre et comme valeur attendue 0
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 0 when to be called with no params", () => {
    expect(calculateTotal()).toEqual(0);
  });

  /**
   * Tester un seul paramètre 'toto' et comme valeur attendue 0
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return 0 when to be called with toto", () => {
    expect(calculateTotal("toto")).toEqual(0);
  });
});
