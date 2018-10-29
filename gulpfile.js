const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const svgmin = require('gulp-svgmin');
// const uglify = require('gulp-uglify');
// const concat = require('gulp-concat');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');


// Copy html to final folder
gulp.task('copyHTML', function(){
    return gulp
        .src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('svgstore', function(){
    return gulp
        .src('src/svg/*.svg')
        // .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('dist/imgs/svg/'));
});

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// gulp.task('js', function(){
//     return gulp.src('src/js/*.js')
//         // .pipe(uglyfly())    
//         .pipe(concat('app.min.js'))
//         .pipe(gulp.dest('dist/js'))
//   });

// Watch Sass & Serve
gulp.task('serve', ['copyHTML','svgstore','sass',], function() {
    browserSync.init({
        server: "./dist"  
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html", ['copyHTML']).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);