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
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0fac4578 = require("../../chunks/index-0fac4578.js");
const Footer = (0, import_index_0fac4578.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"c-author"}">Built with \u{1F49B}&amp;\u2615 by <a target="${"_blank"}" class="${"c-author__link"}" href="${"https://hamidrezakhoramrokh@gmail.com"}">Hamidreza Khoramrokh</a></div>`;
});
