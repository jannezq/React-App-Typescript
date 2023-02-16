import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "../src/components/MyNav";
import FetchSpaceNews from "./components/FetchSpaceNews";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<FetchSpaceNews />} />
          {/* <Route path="/article/:articleId" element={<FetchSpaceNews />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
