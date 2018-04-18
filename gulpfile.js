const gulp = require('gulp')
const theo = require('gulp-theo')
 
// Transform design/props.yml to dist/props.scss:
gulp.task('tokens:scss', () =>
  gulp.src('design/props.yml')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('dist'))
)
gulp.task('tokens:html', () =>
  gulp.src('tokens/buttons/color-buttons.yml')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'html' }
    }))
    .pipe(gulp.dest('dist'))
)