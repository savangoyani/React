import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Header from "./Header";
import Content from "./Content";
// import Footer from "./Footer";
import Product from "./Product"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Test from "./Test";
import Objects from "./Objects";
import Demo from "./Demo";
// import React from "react";
import Ref from "./Ref";
ReactDOM.render(
  <React.StrictMode>
            <Router>
                <Header/>
               
                <Routes>
                <Route path="/" element={<Content/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Routes>
            </Router>
            <Test/>
            <Objects/>
            <Demo/>
            <Ref/>
            
  </React.StrictMode>,
  document.getElementById("root")
);
