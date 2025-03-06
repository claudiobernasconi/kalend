const { src, dest } = require("gulp");
const concat = require('gulp-concat');

function build() {
    return src('./build/dist/styles/**/*.css')
    .pipe(concat('index.css'))
    .pipe(dest('./build/dist/styles'));
}

exports.default = build;
