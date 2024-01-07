const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// Debug Configuration
gulp.task('debug', async () => {
  return gulp.src('C:/veb technologia/lab3/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('C:/veb technologia/lab3/style/css/debug'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('C:/veb technologia/lab3/style/css/debug'));
});

// Production Configuration
gulp.task('production', () => {
  return gulp.src('C:/veb technologia/lab3/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('C:/veb technologia/lab3/style/css/production'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('C:/veb technologia/lab3/style/css/production'));
});

// Watch Task
gulp.task('watch', () => {
  gulp.watch('C:/veb technologia/lab3/style/**/*.scss', gulp.series('debug', 'production'));
});

// Default Task
gulp.task('default', gulp.series('debug', 'production', 'watch'));