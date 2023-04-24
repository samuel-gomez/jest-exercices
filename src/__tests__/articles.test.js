import { rechercheParMotCle } from "../articles";

describe("rechercheParMotCle", () => {
  const articles = [
    { titre: "Lorem Ipsum", contenu: "Lorem Ipsum" },
    {
      titre: "JavaScript pour les nuls",
      contenu: "JavaScript pour les nuls",
    },
    { titre: "Guide de cuisine", contenu: "Guide de cuisine" },
    { titre: "Introduction à React", contenu: "Introduction à React" },
  ];

  /**
   * Tester avec la valeur 'Javascript', mocker les articles et et comme valeur attendue l'item dont le titre est "JavaScript pour les nuls"
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return one item when to be called with 'Javascript'", () => {
    expect(rechercheParMotCle(articles, "JavaScript")).toEqual([
      {
        titre: "JavaScript pour les nuls",
        contenu: "JavaScript pour les nuls",
      },
    ]);
  });

  /**
   * Tester avec la valeur 'toto', mocker les articles et et comme valeur attendue : []
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return no item when to be called with 'toto'", () => {
    expect(rechercheParMotCle(articles, "toto")).toEqual([]);
  });
});
