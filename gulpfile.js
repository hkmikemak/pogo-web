import { rollup, watch } from 'rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import del from 'del';
import gm from 'gulp-gm';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import postcss from 'gulp-postcss';
import rollupConfig from './rollup.config.js';
import sass from 'gulp-dart-sass';
import webp from 'gulp-webp';

const isProduction = process.env.NODE_ENV === 'production';

/** @type { import("gulp").WatchOptions } */
const watchOptions = {
  ignoreInitial: false,
  usePolling: true,
  interval: 1000,
  delay: 500
};

const htmlminOptions = {
  caseSensitive: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  removeComments: true,
  sortAttributes: true,
  sortClassName: true
};

const postcssPlugins = [autoprefixer()];
if (isProduction) {
  postcssPlugins.push(cssnano({ preset: ['default', { discardComments: { removeAll: true } }] }));
}

gulp.task('del', () => del('./dist'));

gulp.task('build:css', () => gulp.src('./src/css/**/index.scss').pipe(sass()).pipe(postcss(postcssPlugins)).pipe(gulp.dest('./dist/css')));
gulp.task('build:html', () => gulp.src('./src/index.html').pipe(htmlmin(htmlminOptions)).pipe(gulp.dest('./dist')));

gulp.task('build:static', () =>
  gulp
    .src(['./src/data/**/*', './src/img/**/*', './src/favicon.ico', './src/manifest.json'], { base: './src', since: gulp.lastRun('build:static') })
    .pipe(gulp.dest('./dist'))
);

// gulp.task('build:img', () => {
//   return gulp
//     .src('./src/img/pokemons/**/*.png', { since: gulp.lastRun("build:img") })
//     .pipe(
//       gm((file) => file.noProfile().resize(384, 384, '!'), {
//         imageMagick: true
//       })
//     )
//     .pipe(webp())
//     .pipe(gulp.dest('./dist/img/pokemons'));
// });

gulp.task('build:js', () => Promise.all(rollupConfig.map((config) => rollup(config).then((bundle) => bundle.write(config.output)))));

gulp.task('build:js-sw', () => rollup(rollupConfigSW).then((bundle) => bundle.write(rollupConfigSW.output)));

gulp.task('watch:all', () => {
  gulp.watch('./src/css/**/*', watchOptions, gulp.series('build:css'));
  gulp.watch('./src/index.html', watchOptions, gulp.series('build:html'));

  //gulp.watch('./src/js/**/*', watchOptions, gulp.series('build:js'));
  gulp.watch(['./src/data/**/*', './src/img/**/*', './src/favicon.ico', './src/manifest.json'], watchOptions, gulp.series('build:static'));
  //gulp.watch(['./src/img/pokemons/**/*.png'], watchOptions, gulp.series('build:img'));

  watch(rollupConfig);
});

gulp.task('build', gulp.series('del', 'build:js', gulp.parallel('build:css', 'build:html', 'build:static')));

gulp.task('watch', gulp.series('del', 'watch:all'));
