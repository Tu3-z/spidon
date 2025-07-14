import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Tracks from "./pages/Tracks";
import Track from "./pages/Track";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/track/:id" element={<Track />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
