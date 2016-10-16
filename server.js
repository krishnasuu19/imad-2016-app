var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleOne = {
    title: "Article One",
    date: "oct 15",
    heading: "Article one: ",
    content: `
             <p>
                this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!
            </p>
            <p>
                this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!
            </p>
             <p>
                this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!
            </p>
             <p>
                this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!this si the ocntent that will apear in my article 1!
            </p>`
    
};
function createTemp (data) {
            var date = data.date;
            var heading = data.heading;
            var content = data.content;
            var title = data.title;
            var templateHtml= `
                <html>
                <head>
                    <title>
                       ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, intial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                    
                </head>
                <body>
                    <div class="container">
                        
                    
                        <div>
                            <a href='/'>Home</a>
                        </div>
                        <hr/>
                    <h3>
                        ${heading};
                    </h3>
                    <div>
                      ${date};
                    </div>
                    <div>
                      ${content};
                    </div>
                </div>
                </body>
            </html>`;
        return templateHtml;
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
 res.send(createTemp(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
