import io from "socket.io-client";

export const socket = io("http://192.168.1.17:3001", {
  autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log("event, args", event, args);
});
