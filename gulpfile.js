import gulp from "gulp";
import dependencies from "gulp-html-dependencies";

let path_dest = 'dist';

gulp.task('dependencies', function() {
    return gulp.src('src/index.html')
        .pipe(dependencies({
            dest: path_dest,    // The basedir of your application. default: path.dirname(file.path)
            prefix: '/vendor',  // The URL prefix. Default "/"
        }))
        .pipe(gulp.dest(path_dest));
});

gulp.task('default', ['dependencies']);