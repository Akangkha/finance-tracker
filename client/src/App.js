import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewEntry from './pages/NewEntry';
function App() {
  return (
    <div className="App">
     <div>
     <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="New" element={<NewEntry />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
