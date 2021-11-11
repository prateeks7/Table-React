import Users from "./Users";
import {useState} from 'react';
function App() {
  var [a,aa] = useState();
  var [text,texta] = useState("Load Data");
  function display()
  {
    aa(<Users></Users>);
    texta("Refresh");
  }
  return (
    <div>
      <center><button style={{color:"red"}} onClick={display}>{text}</button></center>
      {a}
    </div>
  );
}

export default App;
