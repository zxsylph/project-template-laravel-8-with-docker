const mix = require('laravel-mix')
require('laravel-mix-alias')
// require('laravel-mix-bundle-analyzer')

// if (!mix.inProduction() && !mix.isWatching()) {
// 	mix.bundleAnalyzer({
// 		openAnalyzer: false
// 	})
// }
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig(webpack => {
// 	return {
// 		plugins: [
// 			new webpack.DefinePlugin({
// 				AW_ENV: {
// 					API_URL: JSON.stringify(process.env.API_URL)
// 				}
// 			})
// 		]
// 	}
// })
if (mix.inProduction()) {
	console.log('prod')
	mix.options({
		terser: {
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true
				}
			}
		}
	})
} else {
	mix.webpackConfig({
		devtool: 'inline-source-map'
		// devtool: 'cheap-module-evel-sourcemap'
	})
}
mix.alias({
	'@': '/resources/js',
	'~': '/resources/sass',
	'@components': '/resources/js/components',
	'@lib': '/resources/js/lib',
	'@functions': '/resources/js/lib/functions'
})

mix.extract()

mix
	.react('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
	mix.version()
}
