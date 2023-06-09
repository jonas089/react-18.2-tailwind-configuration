import React from 'react';
import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import NavBar from "./components/Nav";
import EmptyPage from "./routes/EmptyPage";
import VotingPage from "./routes/VotingPage";
import "./index.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <NavBar />
      <Outlet /> {/* Renders the matched child component */}
    </nav>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<VotingPage />} />
        <Route path="example2" element={<EmptyPage />} />
      </Route>
    </Routes>
  );
};
/*
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Example />} />
        <Route path="example2" element={<Example2 />} />
      </Route>
    </Routes>
*/

export default App;
