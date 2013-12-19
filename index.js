var framework = require('partial.js');
var http = require('http');

var debug = false;
/*var port = framework.config['default-port'];*/
framework.run(http, 8000);

console.log('http://{0}:{1}/'.format(framework.ip, framework.port));