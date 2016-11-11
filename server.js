var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan( "combined"));

var arOne = {
    title: "Profile",
    heading: "About Myself",
    content: `  <p>
                    Name: K.Sudarshana Lakshmi
                    Age: 18
                    Occupation: Student
                    
                    I love to dance and currently im aiming to do something in my life! But overall i am pretty clueless about life and in life!
                    Love to have companyaround! Quite lonely feeling at times!
                    
                </p>
                
                <p>
                    
                    How about you? What do u like to do?
                    
                </p>`
    
};
function create (data) {
    
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var template = ` <html>
            <head>
                <title>
                    ${title}
                </title>
               <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="contain">
                    <div>
                        <a href="/"> Home </a>
                    </div>
                    <hr/>
                    <h1>
                       
                      ${heading}
                        
                    </h1>
                </div>
                    <hr/>
                <div class="container">
                    <div>
                       ${content}
                    </div>
                </div>
                
            </body>
        </html>`;
    return template;
}


app.get('/articleone' , function (req, res) {
  res.send(create(arOne));
});

app.get('/articletwo' , function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article two.html'));
});

app.get('/articlethree' , function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article three.html'));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
