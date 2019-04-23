"use strict";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "umd"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]]
};
