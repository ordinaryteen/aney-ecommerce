import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Container, Text, Spinner, Center } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Gagal fetch produk:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box minH="100vh" bg="dark">
      <Navbar />
      
      <Container maxW="1200px" py={8}>
        {/* Judul Section */}
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={6}>
          Latest Drops
        </Text>

        {/* Kondisi Loading */}
        {loading ? (
          <Center h="50vh">
            <Spinner size="xl" color="brand.500" />
          </Center>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}

export default App;