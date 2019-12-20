const pluginTester = require("babel-plugin-tester");

const plugin = require("babel-plugin-dlp/src");

const path = require("path");

it('PluginTester', () => {
  pluginTester.default({
		plugin,
		fixtures: path.join(__dirname, "fixtures")
	})
})
