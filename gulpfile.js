const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");

// sass task
function scssTask() {
  return src("app/scss/index.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

// js task
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// img task
function optimizeimg() {
  return src("img/*.{jpg, png, svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 2 }),
        imagemin.svgo({
          plugins: [
            {
              name: "removeViewBox",
              active: true,
            },
            {
              name: "cleanupIDs",
              active: false,
            },
          ],
        }),
      ])
    )
    .pipe(dest("dist", { sourcemaps: "." }));
}

/*
// webp images
function webpImage() {
    return src('img/*.{jpg, png}')
     .pipe(imagewebp())
     .pipe(dest('dist', { sourcemaps: '.' }))
}*/

// browsersync tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// watch task ->
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
  watch("img/**/*.{jpg, png, svg}", optimizeimg);
}

// default gulp task
/*
function defaultTask(cb) {
    series(
        scssTask,
        jsTask,
        optimizeimg,
        browsersyncServe,
        watchTask
    );
    cb();
}*/
exports.default = series(
  scssTask,
  jsTask,
  optimizeimg,
  browsersyncServe,
  watchTask
);
