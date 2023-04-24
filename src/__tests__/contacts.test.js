import { filtreParAge, triParNom } from "../contacts";

const contacts = [
  { nom: "Alice", age: 25 },
  { nom: "Dave", age: 40 },
  { nom: "Charlie", age: 25 },
  { nom: "Bob", age: 30 },
];

describe("filtreParAge", () => {
  /**
   * Tester avec la valeur age à 25, mocker les contacts et et comme valeur attendue Alice et Charlie
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return Alice and Charlie when to be called with age 25", () => {
    expect(filtreParAge(contacts, 25)).toEqual([
      { nom: "Alice", age: 25 },
      { nom: "Charlie", age: 25 },
    ]);
  });
  /**
   * Tester avec la valeur age à 30, mocker les contacts et comme valeur attendue Bob
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return Bob when to be called with age 30", () => {
    expect(filtreParAge(contacts, 30)).toEqual([{ nom: "Bob", age: 30 }]);
  });
});

describe("triParNom", () => {
  /**
   * Tester le tri des contacts et mocker les contacts et comme valeur attendue les contacts triés
   * Méthodes de Jest à utiliser : toEqual
   */
  test("Should return contacts ordered by name when to be called with contacts", () => {
    expect(triParNom(contacts)).toEqual([
      { nom: "Alice", age: 25 },
      { nom: "Bob", age: 30 },
      { nom: "Charlie", age: 25 },
      { nom: "Dave", age: 40 },
    ]);
  });
});
