import React from 'react';
import { Box, Image, Badge, Text, Button, Stack, Flex } from '@chakra-ui/react';

// Kita terima data 'product' sebagai props
const ProductCard = ({ product }) => {
  return (
    <Box 
      bg="gray.800" 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      borderColor="whiteAlpha.200"
      overflow="hidden"
      _hover={{ transform: 'scale(1.02)', transition: '0.2s', borderColor: 'brand.500' }}
    >
      {/* Gambar Placeholder (karena di DB kita gak ada gambar) */}
      <Image 
        src={`https://placehold.co/400x300/1a202c/34b27b?text=${product.name}`} 
        alt={product.name} 
        objectFit="cover"
        h="200px"
        w="100%"
      />

      <Box p="6">
        <Flex alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="green" bg="brand.500" color="white">
            New
          </Badge>
          <Box
            color="gray.400"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Stock: {product.stock_tersisa}
          </Box>
        </Flex>

        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          color="white"
          fontSize="lg"
        >
          {product.name}
        </Box>

        <Box color="gray.300">
          Rp {product.price.toLocaleString('id-ID')}
        </Box>

        <Stack mt={4} direction={'row'} spacing={4}>
          <Button 
            flex={1} 
            bg="brand.500" 
            color="white"
            _hover={{ bg: 'brand.600' }}
            size="sm"
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;