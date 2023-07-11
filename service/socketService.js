import io from "socket.io-client";

export default io(process.env.EXPO_PUBLIC_WSSERVER, {
  transports: ["websocket"],
  path: "/socket.io/",
  reconnection: true,
});
