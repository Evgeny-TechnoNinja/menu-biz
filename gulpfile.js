var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    sourceMaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug');

gulp.task('sass',function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('pug',function buildHTML(){
    return gulp.src('app/pug/*pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
        stream: true
    }))

});

gulp.task('watch', function (){
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
    gulp.watch("app/scss/**/*.scss",["sass"]);
    gulp.watch("app/pug/**/*.pug",["pug"]);
    gulp.watch("app/js/**/*.js",browserSync.reload);
});

gulp.task('build',['pug', 'sass'], function(){
    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    var buildJs = gulp.src('app/js/*.js') 
        .pipe(gulp.dest('dist/js'));   
});
