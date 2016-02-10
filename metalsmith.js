var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var nunjucks = require('nunjucks');

metalsmith = Metalsmith(__dirname)
  .use(markdown())
  .use(layouts({
    engine: 'nunjucks',
    default: 'page.html'
  }))
  .use(function(files, metalsmith, done) {
    console.log(files['index.html']['contents'].toString('utf8'));
    //console.log(files);
    done();
  })
  .build(function(err){
    if (err) throw err;
  });
