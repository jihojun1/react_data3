import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { useReducer } from "react";

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  return (
    // <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
