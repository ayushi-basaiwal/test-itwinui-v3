import logo from './logo.svg';
import './App.css';
import { Button } from "@itwin/itwinui-react"
import {Test} from "@bentley/itwin-enablement-administration"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          onClick={() => {
            console.log("hi, V3")
          }}
        >Hi V3</Button>
        <Test
          onClick={() => {
            console.log("hi, V3")
          }}
        >Button From Package</Test>
      </header>
    </div>
  );
}

export default App;
