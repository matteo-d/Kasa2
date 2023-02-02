import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import { Home } from "./pages/Home"
import { Lodging } from "./pages/Lodging"
import { About } from "./pages/About"
import { Err } from "./pages/Error"

console.log("Test commit from new directory")

const root = ReactDOM.createRoot(document.getElementById('root'));
// Hey Test
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lodging/:id" element={<Lodging />} />
        <Route exact path="/about" element={<About />} />
        <Route path ="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
