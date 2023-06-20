import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
