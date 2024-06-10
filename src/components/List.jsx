import React, { useState, useEffect } from 'react';
import { Grid, Spinner } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Product from './Product';
import axios from 'axios';
import { Heading, Text } from '@chakra-ui/react';

const List = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;

  const getItemData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setDisplayedProducts(response.data.slice(0, itemsPerPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getItemData();
  }, []);

  const fetchMoreData = () => {
    if (displayedProducts.length >= products.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const nextData = products.slice(displayedProducts.length, displayedProducts.length + itemsPerPage);
      setDisplayedProducts([...displayedProducts, ...nextData]);
    }, 1500);
  };

  return (
    <div>
      <Heading as="h1" mb={4} textAlign="center">Tienda en linea</Heading>
      <Text mb={8} textAlign="justify">
        ¡Bienvenido a Nuestra Tienda Online, tu destino único para todo lo que necesitas!
        Ofrecemos una amplia variedad de productos de alta calidad a precios competitivos.
        Desde tecnología y electrónica hasta moda, hogar, juguetes y productos de belleza, tenemos algo para cada miembro de la familia.
        Navega por nuestra colección y disfruta de una experiencia de compra fácil y segura, con envíos rápidos y atención al cliente excepcional.
        Aquí encontrarás las últimas tendencias, los gadgets más innovadores y los artículos indispensables para tu vida diaria, todo en un solo lugar.
        ¡Compra con nosotros y descubre la comodidad de tener todo al alcance de un clic!
      </Text>
      <InfiniteScroll
        hasMore={hasMore}
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No hay mas productos.</b>
          </p>
        }
      >
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} p={4}>
          {displayedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default List;
