import setAnomalyEmptyItems from "../setAnomalyEmptyItems";

describe("setAnomalyEmptyItems", () => {
  /**
   * Tester si la valeur retournée est null avec en entrée ["item"]
   * Méthodes de Jest à utiliser : toBeNull
   */
  test("Should return null when receive items not empty", () => {
    const result = setAnomalyEmptyItems(["item"]);
    expect(result).toBeNull();
  });

  /**
   * Tester l'appel de la fonction sans paramètre si la valeur retournée est égale à :
   * {
      label: "Info : Aucune donnée trouvée",
      type: "info",
      iconName: "exclamation-sign",
    }
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should when receive items not empty", () => {
    const result = setAnomalyEmptyItems();
    const expected = {
      label: "Info : Aucune donnée trouvée",
      type: "info",
      iconName: "exclamation-sign",
    };
    expect(result).toEqual(expected);
  });
});
