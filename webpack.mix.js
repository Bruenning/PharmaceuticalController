let mix = require('laravel-mix');
const path = require('path');

// Path: webpack.config.js

mix
    .js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')


mix.webpackConfig({
    resolve: {
        extensions: ['.js','.ts', '.vue', '.json'],
        fallback: {
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            fs: false,
        },
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        }
    },

})

mix.disableNotifications()
