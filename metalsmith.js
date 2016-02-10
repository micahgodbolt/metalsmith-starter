var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var nunjucks = require('nunjucks');

metalsmith = Metalsmith(__dirname)
  .use(markdown())
  .use(layouts({
    engine: 'nunjucks',
    default: 'page.html'
  }))
  .use(serve())
  .use(watch({
      paths: {
        '${source}/**/*': true,
        'layouts/**/*': '**/*'
      },
      livereload: true
  }))
  .use(function(files, metalsmith, done) {
    //console.log(files['index.html']['contents'].toString('utf8'));
    console.log(files);
    done();
  })
  .build(function(err){
    if (err) throw err;
  });
