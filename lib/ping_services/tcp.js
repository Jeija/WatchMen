var net = require('net');

function ping (service, callback){

  var startTime = new Date();
  var timeout = service.timeout || 10000;
  var socket = net.createConnection(service.host.port, service.host.host);

  var callbackExecuted = false;

  socket.setTimeout(service.timeout || 10000, function () {
    console.log(service.host.host, "timeout");
    if (!callbackExecuted) {
      socket.end();
      callback('Timeout (took more than ' + timeout +  ' ms)', null, null, null);
    }
    callbackExecuted = true;
  });

  socket.on("error", function () {
    console.log(service.host.host, "error");
    if (!callbackExecuted) {
      callback("Could not open socket", null, null, null);
    }
    callbackExecuted = true;
  });

  socket.on("connect", function (data) {
    console.log(service.host.host, "connect");
    if (!callbackExecuted) {
      var timeDiff = (new Date() - startTime);
      callback(null, null, null, timeDiff);
    }
    callbackExecuted = true;
  });
}

module.exports.ping = ping;
