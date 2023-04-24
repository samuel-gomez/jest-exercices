export const isEmptyObject = (elt) =>
  elt &&
  typeof elt === "object" &&
  !(elt instanceof Blob) &&
  Object.keys(elt).length === 0;
export const isEmptyArray = (elt) => Array.isArray(elt) && elt.length === 0;
export const isNullOrUndefined = (elt) => elt === null || elt === undefined;

export default (elt) =>
  elt === "" ||
  isEmptyArray(elt) ||
  isEmptyObject(elt) ||
  isNullOrUndefined(elt);
