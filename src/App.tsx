import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About , Contact , Experience , Feedbacks , Hero , Loader  , Tech , Works , Navbar  }  from "./components"
const App=()=> {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element="ef" />
      <Route path="/a" element="jfn" />
    </Routes>
  </BrowserRouter>
     
  )
}

export default App
