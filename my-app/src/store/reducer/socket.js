var app = require('express').createServer();
io = require('socket.io').listen(app);
http = require('http');
app.listen(8080);

const initState = {
  isMessage: false,
  socket: false,
  source_channel_id: '',
  handleLog: () => {},
};
const connect = (state = initState, payload) => {
  const { socket, source_channel_id } = payload;
  socket.on('connect', () => {
    socket.emit(
      'login',
      {
        user_id: user.user_id,
        token: localStorage.getItem('access_token'),
        channel_id: source_channel_id,
      },
      err => {
        if (err) console.log('connect socket err', err);
      },
    );
    console.log('socket connected');
  });
  
  var options = {
    host: 'localhost',
    port: 5053,
    path: '/log',
    method: 'GET'
  };
  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });
  req.end();
  
}

export default connect;