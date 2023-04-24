function logLesTechnos(techno, callback = console.log) {
  if (techno === "front") {
    callback("SolidJS");
    callback("Qwik");
    callback("Svelte");
  }
  if (techno === "back") {
    callback("NodeJS");
  }
}

export default logLesTechnos;
