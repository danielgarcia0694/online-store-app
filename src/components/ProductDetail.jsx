import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { CartContext } from './CartContext';

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.title} boxSize="300px" objectFit="fill" mx="auto" />
      <Heading mt={4}>{product.title}</Heading>
      <Text mt={2}>{product.description}</Text>
      <Text mt={2} color="blue.600" fontSize="2xl">${product.price}</Text>
      <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>Añadir al carrito</Button>
    </Box>
  );
};

export default ProductDetail;
