const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: { builder: "@storybook/builder-vite" },
	features: {
		storyStoreV7: true,
		interactionsDebugger: true,
	},
	viteFinal: (config, { configType }) => {
		if (configType === "PRODUCTION") {
			config.base = "/design-system/";
		}
		return mergeConfig(config, {
			// customize the Vite config here
			resolve: {
				alias: [{ find: "~", replacement: path.resolve(__dirname, "..", "src") }],
			},
		});
	},
};
