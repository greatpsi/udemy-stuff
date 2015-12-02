var http = require ('http')

var port = process.env.PORT || 8181
var server = http.createServer(function(req, res) {
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
                res.setHeader('Content-Type','text/plain')
                res.end('Hello World ' + dformat)
                  })
                  
server.listen(port)