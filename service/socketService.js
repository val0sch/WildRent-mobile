import io from "socket.io-client";
console.log(process.env.EXPO_PUBLIC_WSSERVER);
export default io(process.env.EXPO_PUBLIC_WSSERVER, {
  // transports: ["websocket"],
  autoConnect: false,
  // reconnection: true,
});

// import { io } from "socket.io-client";

// const URL = process.env.EXPO_PUBLIC_WSSERVER;
// // autoConnect is set to false so the connection is not established right away.
// // We will manually call socket.connect() later, once the user has selected a username.
// const socket = io(URL, { autoConnect: false });

// // We also register a catch-all listener, which is very useful during development:
// // https://socket.io/docs/v4/listening-to-events/#Catch-all-listeners
// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

// export default socket;
