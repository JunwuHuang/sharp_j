"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var dom_exports = {};
__export(dom_exports, {
  getOfftopFromRoot: () => getOfftopFromRoot
});
module.exports = __toCommonJS(dom_exports);
function getOfftopFromRoot(element) {
  if (!element) {
    return 0;
  }
  let head = element;
  let top = 0;
  while (head && "offsetTop" in head) {
    top += head.offsetTop;
    head = head.offsetParent;
  }
  return top;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getOfftopFromRoot
});
