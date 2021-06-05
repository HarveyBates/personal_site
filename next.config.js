const path = require('path')
const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
	    path:'.env'
})

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack(config) {
		config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
		return config
	}
}
