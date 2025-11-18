import React from 'react';
import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // <--- JANGAN LUPA INI

const Navbar = () => {
  return (
    <Box bg="dark" px={4} py={4} borderBottom="1px" borderColor="whiteAlpha.200" position="sticky" top={0} zIndex={10}>
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading as={RouterLink} to="/" size="lg" color="brand.500" letterSpacing="tight" _hover={{ textDecoration: 'none' }}>
          feez.
        </Heading>

        <Spacer />

        <Flex gap={4}>
          <Button 
            as={RouterLink} 
            to="/login" 
            variant="ghost" 
            color="gray.300" 
            _hover={{ bg: 'whiteAlpha.200', color: 'white' }}
          >
            Login
          </Button>
          <Button bg="brand.500" color="white" _hover={{ bg: 'brand.600' }}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;