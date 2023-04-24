import isEmptyOrNull from "./isEmptyOrNull";

export default (items = [], label = "Info : Aucune donnée trouvée") =>
  isEmptyOrNull(items)
    ? { label, type: "info", iconName: "exclamation-sign" }
    : null;
