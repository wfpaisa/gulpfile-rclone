const { src, watch, series, dest } = require("gulp");
const { exec } = require("child_process");

function miScript() {
  return exec("date>fecha.txt");
}

exports.default = function () {
  watch("src/**/*.md", series(miScript));
};
