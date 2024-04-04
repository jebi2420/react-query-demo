import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ReactQueryPage from './pages/ReactQueryPage';

function App() {
  return (
    <div>
      <nav style={{backgroundColor: "pink", padding:"20px"}}>
        <Link to="/" style={{marginRight: "10px"}}>
          Homepage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
