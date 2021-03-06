var gulp = require('gulp');
var sass = require('gulp-sass');

var bourbon = require('node-bourbon');
bourbon.includePaths // Array of Bourbon paths

var input = './app/sass/**/*.scss';
var output = './public/css/';


gulp.task('styles', function() {
    return gulp
        // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});


//Watch task
gulp.task('default',function() {
    gulp.watch(input,['styles']);
});

