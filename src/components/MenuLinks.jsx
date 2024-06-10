import React, { useContext } from 'react';
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import MenuItem from "./MenuItem"
import { MdOutlineShoppingCart } from "react-icons/md"
import { CartContext } from './CartContext';

const MenuLinks = ({ isOpen }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {/* <MenuItem to="/">Minha Conta</MenuItem>
        <MenuItem to="/how"> Meus Pedidos </MenuItem>
        <MenuItem to="/faetures"> Favoritos </MenuItem>
        <MenuItem to="/pricing"> Recomendados </MenuItem> */}
        <MenuItem to="/cart" isLast>
          {isOpen ? <span>Ver carrito</span> : <MdOutlineShoppingCart fontSize={32} />}
        </MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks