import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Box minH="100vh" bg="dark">
      <Navbar />
      
      {/* Area Konten yang Berubah-ubah */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* tambah: <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Box>
  );
}

export default App;