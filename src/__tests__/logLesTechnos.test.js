describe("logLesTechnos", () => {
  /**
   * Tester avec la valeur "front" et mocker le callback avec jest.fn()
   * Vérifier si la fonction callback a été appélée
   * Vérifier si l'appel 1 de la fonction callback a été appélée avec "SolidJS"
   * Vérifier si l'appel 2 de la fonction callback a été appélée avec "Qwik"
   * Vérifier si l'appel 3 de la fonction callback a été appélée avec "Svelte"
   * Vérifier si la fonction callback a été appélée 3 fois
   * Méthodes de Jest à utiliser : jest.fn, toHaveBeenCalled, toHaveBeenCalledWith, toHaveBeenNthCalledWith, toBeCalledTimes
   */
  /**
   * Tester avec la valeur "back" et mocker le callback avec jest.fn()
   * Vérifier si l'appel 1 de la fonction callback a été appélée avec "SolidJS"
   * Vérifier si la fonction callback a été appélée 3 fois
   * Méthodes de Jest à utiliser : jest.fn, toHaveBeenCalledWith, toBeCalledTimes
   */
  /**
   * Tester avec la valeur "other" et mocker le callback avec jest.fn()
   * Vérifier si la fonction callback n'a pas été appélée
   * Méthodes de Jest à utiliser : jest.fn, .not.toHaveBeenCalledWith
   */
  /**
   * Tester avec la valeur "back" et mocker le console.log avec un monkey patching
   * Méthodes de Jest à utiliser : toHaveBeenCalled, jest.fn
   */
  /**
   * Tester avec la valeur "back" et mocker le console.log avec un spyOn
   * Méthodes de Jest à utiliser : toBeCalledTimes, jest.spyOn, restoreMock
   */
});
