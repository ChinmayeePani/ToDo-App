import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  function addActivity(){
    setList((list) => {
      const updatedList=[...list, data]
      console.log(updatedList)
      setData('');
      return updatedList
    })
  }
  
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Data"
          className="inputbox"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className="btn" onClick={addActivity}>ADD</button>
        <p className="list">Here is your List :</p>
        {
          list.map((i) => {
            return(
              <p className="para">{i}</p>
            )
          })
          
        }
        
      </div>
    </>
  );
}

export default App;
