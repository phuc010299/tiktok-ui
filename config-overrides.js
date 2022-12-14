/* config-overrides.js */

const { override, useBabelRc } = require("customize-cra");
const path = require("path");
module.exports = override(
    useBabelRc()
);