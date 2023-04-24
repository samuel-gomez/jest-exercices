import logLesTechnos from "../logLesTechnos";

/*
 * Il est possible de clear tous les mocks après chaque tests

    afterEach(() => {
      jest.clearAllMocks();
    });
*/

/*
 * Pour un reset global sur tous les tests du projet : jest.config.js
  {
    clearMocks: true,
  }
*/

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
  test("Should log to have been called when techno equal front", () => {
    const log = jest.fn();
    logLesTechnos("front", log);
    expect(log).toHaveBeenCalled();
    expect(log).toHaveBeenNthCalledWith(1, "SolidJS");
    expect(log).toHaveBeenNthCalledWith(2, "Qwik");
    expect(log).toHaveBeenNthCalledWith(3, "Svelte");
    expect(log).toBeCalledTimes(3);
  });

  /**
   * Tester avec la valeur "back" et mocker le callback avec jest.fn()
   * Vérifier si l'appel 1 de la fonction callback a été appélée avec "SolidJS"
   * Vérifier si la fonction callback a été appélée 3 fois
   * Méthodes de Jest à utiliser : jest.fn, toHaveBeenCalledWith, toBeCalledTimes
   */
  test("Should log to have been called when techno equal back", () => {
    const log = jest.fn();
    logLesTechnos("back", log);
    expect(log).toHaveBeenCalledWith("NodeJS");
    expect(log).toBeCalledTimes(1);
  });

  /**
   * Tester avec la valeur "other" et mocker le callback avec jest.fn()
   * Vérifier si la fonction callback n'a pas été appélée
   * Méthodes de Jest à utiliser : jest.fn, .not.toHaveBeenCalledWith
   */
  test("does not log something octopus-flavoured", () => {
    const log = jest.fn();
    logLesTechnos("other", log);
    expect(log).not.toHaveBeenCalled();
  });

  /**
   * Tester avec la valeur "back" et mocker le console.log avec un monkey patching
   * Méthodes de Jest à utiliser : toHaveBeenCalled, jest.fn
   */
  test("Should console.log to be called", () => {
    const globalConsole = global.console;
    global.console = { log: jest.fn() };
    logLesTechnos("back");
    expect(console.log).toHaveBeenCalled();
    global.console = globalConsole;
  });

  /**
   * Tester avec la valeur "back" et mocker le console.log avec un spyOn
   * Méthodes de Jest à utiliser : toBeCalledTimes, jest.spyOn, restoreMock
   */
  test("Should console.log to be called", () => {
    const spy = jest.spyOn(global.console, "log");
    logLesTechnos("front");
    expect(spy).toBeCalledTimes(3);
    spy.mockRestore();
  });
});
