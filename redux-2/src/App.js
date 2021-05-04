import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App(){
  const text = useSelector(state => state.list);
  const dispatch = useDispatch();
  const addText = (text2) => {
      dispatch({
        type: "text",
        payload: text2
      })
  }
  const [newText, setNewText] = useState("");
  return (
    <div>
      <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}></input>
      <button onClick={() => addText(newText)}>
        Добавить
      </button>
      <div>
        <ul>
          {text.map((i)=> <li>{i}</li>)}
        </ul>
      </div>
    </div>
  )
};
export default App;