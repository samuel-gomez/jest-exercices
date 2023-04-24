import { calculateTotal } from "./calculs";
import { filtreParAge } from "./contacts";

export function addTotalByAge(contacts, age, price, quantity) {
  const contactsFiltered = filtreParAge(contacts, age);
  return contactsFiltered.map((contact) => ({
    ...contact,
    total: calculateTotal(price, quantity),
  }));
}
