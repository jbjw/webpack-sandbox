const path = require("path")

module.exports = {
	mode: "development",
	entry: "./source/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 80,
		open: true,
	},
}
