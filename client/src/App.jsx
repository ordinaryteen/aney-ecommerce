import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      
      <Box maxW="1200px" mx="auto" p={4}>
        <h1>Bleee</h1>
      </Box>
    </Box>
  );
}

export default App;