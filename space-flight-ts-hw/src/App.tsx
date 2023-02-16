import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "../src/components/MyNav";
import Home from "./components/Home";
import FetchSpaceNews from "./components/FetchSpaceNews";

function App() {
  return (
    <>
      <div className="App">
        <MyNav />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchSpaceNews />} />
          <Route path="/details/:id" element={<FetchSpaceNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
