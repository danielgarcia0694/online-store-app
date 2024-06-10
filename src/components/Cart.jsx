import React, { useContext } from 'react';
import { Box, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, setCartItems, setPurchasedItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setPurchasedItems(cartItems);
    setCartItems([]);
    navigate('/invoice');
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Carrito de compras</Heading>
      {cartItems.length === 0 ? (
        <Text>El carrito esta vacio.</Text>
      ) : (
        <Stack spacing={4}>
          {cartItems.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Heading size="md">{item.title}</Heading>
                  <Text>${item.price}</Text>
                  <Text>Cantidad: {item.quantity}</Text>
                </Box>
                <Button colorScheme="red" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </Flex>
            </Box>
          ))}
          <Text>Total: ${totalPrice.toFixed(2)}</Text>
          <Button onClick={handleCheckout} colorScheme="blue">Pagar</Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
