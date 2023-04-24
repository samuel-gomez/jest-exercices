import fetchData from "../fetchData";

describe("fetchData doit être appelée avec le bon URL", () => {
  /**
   * Tester avec la valeur "https://api.example.com/data" et mocker la fonction global.fetch native en monckey patching
   * Vérifier si la fonction fetch n'a pas été appélée
   * Méthodes de Jest à utiliser : jest.fn, toHaveBeenCalledWith
   */
  test("fetchData doit être appelée avec le bon URL", async () => {
    // Mock
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve("ok"),
      })
    );

    // Appeler la fonction à tester
    await fetchData("https://api.example.com/data");

    // Vérifier si la fonction a été appelée avec le bon URL
    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data");

    // Restaurer la fonction originale
    delete global.fetch;
  });
});
