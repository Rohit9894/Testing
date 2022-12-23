import  {Server} from "socket.io"
let users = 0; let history =[];
const SocketHandler = (req, res) => {
    const users = 0;
    if (res.socket.server.io) {
      
      console.log('Socket is already running')
    } else {
      const   users =  users + 1;
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io
    
        io.on('connection', socket => {
            socket.emit("history", history)
            socket.broadcast.emit("newuser", users);
          socket.on('newtext', (msg) =>{
            history.push(msg)
            io.emit("newtext", msg)
          })
        })
      }
    
    res.end()
  }
  
  export default SocketHandler