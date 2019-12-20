const pluginTester = require("babel-plugin-tester");

const plugin = require("babel-plugin-dlp/src");

const path = require("path");

pluginTester.default({
  plugin,
  tests: [
    {
      fixture: path.join(__dirname, "__fixtures__", "code.js"),
      outputFixture: path.join(__dirname, "__fixtures__", "output.js")
    }
  ]
});
