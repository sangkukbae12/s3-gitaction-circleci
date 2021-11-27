import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
          <Route path="/" element={<RepoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
