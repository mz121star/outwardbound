var framework = require('partial.js');
var http = require('http');

var debug = true;
var port = framework.config['default-port'];
framework.run(http, debug, port);
framework.log('http://{0}:{1}/'.format(framework.ip, framework.port));
console.log('http://{0}:{1}/'.format(framework.ip, framework.port));