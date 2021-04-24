var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("sass", function(){
  return gulp.src("sass/*.scss")
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(sass({outputStyle: "expanded"}))
  .pipe(postcss([autoprefixer()]))
  // .pipe(plumber())
  .pipe(gulp.dest("css"));
});

gulp.task("watch", function(){
  gulp.watch("sass/*.scss", gulp.task("sass"));
});
