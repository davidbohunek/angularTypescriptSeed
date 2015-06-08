var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-ruby-sass') ;
var notify = require("gulp-notify") ;
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

var PATHS = {
    src: {
      js: 'src/**/*.js',
      jsmap: 'src/**/*.js.map',
      html: 'src/**/*.html',
      sass: {
        main: 'src/sass/style.scss',
        all: 'src/**/*.scss'
      }
    },
    libs: {
        bower: './bower_components' ,
    }
};


gulp.task('clean', function(done) {
    del(['dist'], done);
});

gulp.task('bower', function() { 
    return bower()
        .pipe(gulp.dest(PATHS.libs.bower)) 
});

gulp.task('libs', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest("dist/vendor"))
});

gulp.task('js', function () {
    return gulp.src(PATHS.src.js)
        .pipe(gulp.dest('dist'));
});

gulp.task('jsmap', function () {
    return gulp.src(PATHS.src.jsmap)
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() { 
    return sass(PATHS.src.sass.main, {
            style: 'compressed',
             loadPath: [
                PATHS.src.sass.all, 
                PATHS.libs.bower + '/bootstrap-sass-official/assets/stylesheets', 
                PATHS.libs.bower + '/fontawesome/scss', 
            ]
        })
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() { 
    gulp.watch(PATHS.src.sass.all, ['css']); 
});

gulp.task('play', ['default'], function () {

    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');
    var port = 3000;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);
    gulp.watch(PATHS.src.sass.all, ['css']);

    app = connect();

    app.use(serveStatic(__dirname + '/dist'));  // serve everything that is static

    http.createServer(app).listen(port, function () {
      console.log('\n', 'Server listening on port', port, '\n')
    });
});

gulp.task('default', ['js', 'css', 'html', 'libs']);
