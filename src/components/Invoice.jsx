import React, { useContext } from 'react';
import { Box, Button, Heading, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  const { purchasedItems, setPurchasedItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = purchasedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBackToHome = () => {
    setPurchasedItems([]);
    navigate('/');
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>Factura</Heading>
      <VStack align="stretch" spacing={4}>
        <List spacing={3}>
          {purchasedItems.map((item) => (
            <ListItem key={item.id}>
              <Text>{item.title} x {item.quantity} - ${item.price.toFixed(2)} cada uno</Text>
            </ListItem>
          ))}
        </List>
        <Text fontWeight="bold">Total: ${totalAmount.toFixed(2)}</Text>
        <Button onClick={handleBackToHome} colorScheme="blue">Volver a la página de inicio</Button>
      </VStack>
    </Box>
  );
};

export default Invoice;
