import io from "socket.io-client";

export default socket = io("http://localhost:3001", {
  transports: ["websocket"],
});
