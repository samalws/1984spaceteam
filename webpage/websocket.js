// setup websocket with server, returning a function that you call when you do an action
// stateReceived is called when a new state is received from the server
function websocketSetup(stateReceived) {
  var WebSocketClient = require('websocket').client
  var client = new WebSocketClient()
  client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString())
  })
  client.on('connect', function(connection) {
    console.log('WebSocket Client Connected')
    connection.on('error', function(error) {
    alert("AAAAAAA") // kristina moment
  })
  connection.on('close', function() {
    alert("AAAAAAA") // kristina moment
  })
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      stateReceived(JSON.parse(message.utf8Data))
    } else {
      alert("AAAAAAA") // kristina moment
    }
    })
    client.connect('ws://localhost:8080/', 'echo-protocol')
    function sendAction(action) {
      if (connection.connected) {
       connection.sendUTF(JSON.stringify(action))
      } else {
        alert("AAAAAAA") // kristina moment
      }
    }
    return sendAction
})
