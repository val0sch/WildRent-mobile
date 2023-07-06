import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useAuth() {
  const context = useContext(AuthContext);
  console.log("context", context);
  return { ...context };
}

export default useAuth;
