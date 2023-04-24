export function filtreParAge(contacts, age) {
  return contacts.filter((contact) => contact.age === age);
}

export function triParNom(contacts) {
  return contacts.sort((a, b) => a.nom.localeCompare(b.nom));
}
