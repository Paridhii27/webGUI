let ws = new WebSocket("wss://socket-server-final-project.herokuapp.com/:443");
//let ws = new WebSocket("ws://localhost:5001");
let controlledbyTD = document.querySelector (".controlledbyTD")
let controlTD = document.querySelector(".controlTD")
console.log(controlTD.value)
// values in td go from 0 to 1 and in web it goes from 0 to 100 

controlTD.addEventListener ('input', (event) =>{
  console.log(controlTD.value)
  ws.send( JSON.stringify({"slider1" : controlTD.value/ 100.0}))
})

// change for only the final changed value 

ws.addEventListener('open', (event) => {
  console.log('websocket opened')
});

ws.addEventListener('message', (message) => {
  if (message.data == "ping" ){
    ws.send ("pong")
    return
  }

  let data = JSON.parse(message.data);
  if ("slider1" in data) { 
    let val = data["slider1"];
    controlledbyTD.value = val * 100;
    console.log('val', val)
  }
  console.log(message);
});

ws.addEventListener('error', (error) => {
  console.error('websocket closed')
});

ws.addEventListener('close', (event) => {
  console.log('websocket closed')
});