import logo from './logo.svg';
import './App.css';
import Page from './pages/landing/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectPage from './pages/connect/ConnectPage';
import Phrase from './pages/connect/Phrase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route path="/wallet" element={<ConnectPage />}/>
        <Route path="/phrase" element={<Phrase />}/>


          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
