import io from "socket.io-client";
console.log(process.env.EXPO_PUBLIC_WSSERVER);
export default io(process.env.EXPO_PUBLIC_WSSERVER, {
  transports: ["websocket"],
  reconnection: true,
});
