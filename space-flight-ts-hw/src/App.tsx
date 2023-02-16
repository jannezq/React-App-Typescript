import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "../src/components/MyNav";
import FetchSpaceNews from "./components/FetchSpaceNews";
import ArticleDetailComponent from "./components/ArticleDetailComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<FetchSpaceNews />} />
          <Route
            path="/article/:articleId"
            element={<ArticleDetailComponent />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
