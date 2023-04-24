import { filtreParAge } from "../contacts";
import { calculateTotal } from "../calculs";
import { addTotalByAge } from "../addTotalByAge";

const contacts = [
  { nom: "Alice", age: 25 },
  { nom: "Dave", age: 40 },
  { nom: "Charlie", age: 25 },
  { nom: "Bob", age: 30 },
];

jest.mock("../contacts", () => ({
  filtreParAge: jest.fn().mockReturnValue([
    { nom: "Alice", age: 25 },
    { nom: "Charlie", age: 25 },
  ]),
}));

jest.mock("../calculs", () => ({
  calculateTotal: jest.fn().mockReturnValue(50),
}));

describe("addTotalByAge", () => {
  /**
   * Tester l'ajout de total sur les personnes ayant 25 ans, mocker les contacts, un prix à 10 et quantité à 5
   * Vérifiez que filtreParAge a été appelé avec les valeurs de contacts et de age à 25
   * Vérifiez que filtreParAge a été appelé 1 fois
   * Vérifiez que calculateTotal a été appelé avec les valeurs de price à 10 et de quantity à 5
   * Vérifiez que calculateTotal a été appelé 2 fois
   * Méthodes de Jest à utiliser : toEqual, jest.mock, toHaveBeenCalledWith, toBeCalledTimes, mockReturnValue
   */
  test("Should return new array of contacts with age 25 and total 50 when to be called with price=10, quantity = 5, age = 25", () => {
    const price = 10;
    const quantity = 5;
    const age = 25;

    expect(addTotalByAge(contacts, age, price, quantity)).toEqual([
      { nom: "Alice", age: 25, total: 50 },
      { nom: "Charlie", age: 25, total: 50 },
    ]);

    expect(filtreParAge).toHaveBeenCalledWith(contacts, age);
    expect(filtreParAge).toBeCalledTimes(1);
    expect(calculateTotal).toHaveBeenCalledWith(price, quantity);
    expect(calculateTotal).toBeCalledTimes(2);
  });
});
