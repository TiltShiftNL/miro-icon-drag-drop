var express = require('express')
var cors = require('cors')
var app = express()
var glob = require('glob');
var sizeOf = require('image-size');

app.use(cors())
app.set('view engine', 'ejs')

app.get('/content.html', function (req, res, next) {
    var arr = [];
    glob( 'img/**/*.svg', function( err, files ) {
        if (err) {
            throw err;
        }
        console.log(files)
        // files object contains all files names
        // log them on console
        files.forEach(file => {
            var dimensions = sizeOf(file);
            filearr = file.split('/');
            arr.push({
                src: file,
                width: dimensions.width,
                height: dimensions.height,
                type: filearr[1].includes('.svg') ? 'default' : filearr[1]
            })
        });
        res.render('content', { arr: arr })
    });
})

// Serve everything else as static
app.use('/', express.static('.'))

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})