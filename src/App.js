import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} exact />
      </Routes>
    </Layout>
  );
}

export default App;
