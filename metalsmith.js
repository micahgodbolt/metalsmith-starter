var Metalsmith = require('metalsmith');

metalsmith = Metalsmith(__dirname)
  .use(function(files, metalsmith, done) {
    console.log(files);
    console.log(metalsmith);
    done();
  })
  .build(function(err){
    if (err) throw err;
  });
