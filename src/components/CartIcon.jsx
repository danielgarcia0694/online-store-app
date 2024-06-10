import React, { useContext } from 'react';
import { Box, Icon, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md"

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <Box position="relative" display="inline-block">
      <Link to="/cart">
        <Icon as={MdOutlineShoppingCart} w={8} h={8} boxSize={10} />
        {cartCount > 0 && (
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            bg="red.500"
            borderRadius="full"
            boxSize="1.5em"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            {cartCount}
          </Badge>
        )}
      </Link>
    </Box>
  );
};

export default CartIcon;
