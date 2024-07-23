import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './kirish/kirish';
import NextPage from './nearypege/neary'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
