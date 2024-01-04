import { useState } from "react"
import StateLift from "./components/StateLift"
import ChangeStateLift from "./components/ChangeStateLift"
import './App.css'

function App() {

  const [name, setName] = useState("")
  const handleUser = (user) => {
    setName(user)
  };

  return (
    <>
      <div className="App">
        <p><b>State Lift</b></p>
        <StateLift user={name} />
        <ChangeStateLift handleUser={handleUser} />
      </div>
    </>
  );
};

export default App
