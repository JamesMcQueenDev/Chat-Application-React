import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { auth } from "./assets/Firebase";
import Login from "./components/login/Login";
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
