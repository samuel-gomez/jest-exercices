export function calculeMoyenne(notes) {
  const somme = notes.reduce((acc, note) => acc + note, 0);
  return somme / notes.length;
}

export function calculateTotal(price = 0, quantity = 0) {
  if (isNaN(Number(price)) || isNaN(Number(quantity))) {
    return 0;
  }
  return price * quantity;
}
