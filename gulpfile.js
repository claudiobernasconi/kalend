const { src, dest, series } = require("gulp");
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');

function singleCSSFile() {
    return src('./build/dist/styles/**/*.css')
    .pipe(concat('index.css'))
    .pipe(dest('./build/dist/styles'));
}

function copyMappings() {
    return src('./build/dist/styles/tmp/**/*.css.map')
    .pipe(flatten())
    .pipe(dest('./build/dist/styles'));
}

exports.default = series(singleCSSFile, copyMappings);
