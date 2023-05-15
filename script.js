let ws = new WebSocket("wss://socket-server-final-project.herokuapp.com/:443");
//let ws = new WebSocket("ws://localhost:5001");
let controlledbyTD = document.querySelector (".controlledbyTD")
let controlledbyTD2 = document.querySelector (".controlledbyTD2")

let controlTD = document.querySelector(".controlTD")
let controlTD2 = document.querySelector(".controlTD2")
let controlTD3 = document.querySelector(".controlTD3")
let controlTD4 = document.querySelector(".controlTD4")
let controlTD5 = document.querySelector(".controlTD5")
// values in td go from 0 to 1 and in web it goes from 0 to 100 

controlTD.addEventListener ('input', (event) =>{
  console.log("slider1",controlTD.value)
  ws.send( JSON.stringify({"slider1" : controlTD.value/ 100.0}))
})

controlTD2.addEventListener ('input', (event) =>{
  console.log("slider2",controlTD2.value)
  ws.send( JSON.stringify({"slider2" : controlTD2.value/ 100.0}))
})

controlTD3.addEventListener ('input', (event) =>{
  console.log("slider3",controlTD3.value)
  ws.send( JSON.stringify({"slider3" : controlTD3.value/ 100.0}))
})

controlTD4.addEventListener ('input', (event) =>{
  console.log("slider4",controlTD4.value)
  ws.send( JSON.stringify({"slider4" : controlTD4.value/ 100.0}))
})

controlTD5.addEventListener ('input', (event) =>{
  console.log("slider5",controlTD5.value)
  ws.send( JSON.stringify({"slider5" : controlTD5.value/ 100.0}))
})

// change for only the final changed value 

ws.addEventListener('open', (event) => {
  console.log('websocket opened')
});

ws.addEventListener('message', (message) => {
  if (message.data == 'ping' ){
    ws.send ('pong')
    return
  }

  let data = JSON.parse(message.data);
  if ('slider1' in data) {
    let val = data['slider1']
    controlledbyTD.value = val * 100;
    console.log('val', val);
  }

  else if ('slider2' in data) {
    let val2 = data['slider2']
    controlledbyTD2.value = val2 * 100;
    console.log('val', val2);
  }
  console.log(data);
});

ws.addEventListener('error', (error) => {
  console.error('websocket closed')
});

ws.addEventListener('close', (event) => {
  console.log('websocket closed')
});