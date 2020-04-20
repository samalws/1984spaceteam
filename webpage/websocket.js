// setup websocket with server, returning a function that you call when you do an action
// stateReceived is called when a new state is received from the server
function makeWebsocket(playerName, stateReceived) {
  var WebSocketClient = require('websocket').client
  var client = new WebSocketClient()
  client.on("connectFailed", function(error) {
    //alert("AAAAAAA") // kristina moment
  })
  client.on('connect', function(connection) {
    console.log("connected websocket")
    connection.on('error', function(error) {
      //alert("AAAAAAA") // kristina moment
    })
    connection.on('close', function() {
      //alert("AAAAAAA") // kristina moment
    })
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
        stateReceived(JSON.parse(message.utf8Data))
      } else {
        alert("AAAAAAA") // kristina moment
      }
    })
    client.sendUTF8("hwii i'm " + playerName)
  })
  client.connect('ws://localhost:880/', 'echo-protocol')
  return action => connection.connected ? connection.sendUTF(JSON.stringify(action)) : alert("AAAAAAA") // kristina moment
})
