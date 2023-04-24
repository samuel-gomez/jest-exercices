export function rechercheParMotCle(articles, motCle) {
  return articles.filter((article) => article.titre.includes(motCle));
}
