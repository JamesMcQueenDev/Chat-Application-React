import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Dashboard from "./Dashboard";
import { auth } from "./Firebase";
import Login from "./Login";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <div className="AppBody">{!user ? <Login /> : <Dashboard />}</div>
    </div>
  );
}

export default App;
