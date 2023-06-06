import gulp from "gulp";
import connect from "gulp-connect";
import { build } from "./build.js";
import { compileTask } from "./compile.js";
import { getDemo } from "./helpers.js";

// localhost site
const localHostTask = (cb) => {
  connect.server({
    root: "..",
    livereload: true,
  });
  cb();
};

const reloadTask = (cb) => {
  connect.reload();
  console.log('ss');
  cb();
};

const watchTask = () => {
  return gulp.watch(
    [build.config.path.src + "/**/*.js", build.config.path.src + "/**/*.scss"],
    gulp.series(compileTask)
  );
};

const watchSCSSTask = () => {
  console.log('watchSCSSTask',build.config.path.src + "/**/*.scss");
  return gulp.watch(
    build.config.path.src + "/**/*.scss",
    gulp.parallel(compileTask)
  );
};

const watchJSTask = () => {
  console.log('watchJSTask',build.config.path.src + "/**/*.scss");

  return gulp.watch(
    build.config.path.src + "/**/*.js",
    gulp.parallel(compileTask)
  );
};

// Exports
export { localHostTask, reloadTask, watchTask, watchSCSSTask, watchJSTask };
