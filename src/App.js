import "./App.css";
import Count from "./components/count";
import Input from "./components/input";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <Users />
      <Count />
      <Input />
    </div>
  );
}

export default App;
