import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const statesObj = {
  list: []
}
const reducer = (state = statesObj, action) => {
  if(action.type === "text"){
    return {
      list: [
        ...state.list,
        action.payload
      ]
    }
  }
  return state
};
const store = createStore(reducer)
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);