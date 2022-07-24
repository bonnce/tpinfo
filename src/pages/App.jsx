import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./page404";
import Search from "./searchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/buscador" element={<Search/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
