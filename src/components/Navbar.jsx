import React, { useState, useEffect } from 'react';
import { Link } from "@chakra-ui/react";

import NavbarContainer from './NavbarContainer'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'
import CartIcon from './CartIcon'

import Logo from "../assets/store.svg?react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavbarContainer>
        <Link href={'/'}>
          <Logo />
        </Link>
        {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
        {/* <MenuLinks isOpen={isOpen} /> */}
        <CartIcon />
      </NavbarContainer>
    </div>
  )
}

export default Navbar