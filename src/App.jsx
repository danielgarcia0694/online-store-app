// import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar'
import List from './components/List'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart';
import CartProvider from './components/CartContext';
import Invoice from './components/Invoice';


function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Navbar />
          <Container maxW="container.xl" p={4}>
            <Box>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/invoice" element={<Invoice />} />
              </Routes>
            </Box>
          </Container>
        </Router>
      </CartProvider>
    </div>
  )
}

export default App
