import React  from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Main} from "./pages/Main";
import {Solana} from "./pages/Solana";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />}></Route>
                <Route path="/home" element={<Main />}></Route>
                <Route path="/solana" element={<Solana />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
