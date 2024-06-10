import React, { useContext } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card maxW='sm'>
      <CardBody display="flex" flexDirection="column">
        <Image
          src={product.image}
          alt={product.description}
          borderRadius='lg'
          boxSize='150px'
          alignSelf='center'
        />
        <Stack mt='6' spacing='3' textAlign="center" width="100%">
          <Heading size='md' isTruncated>
            <RouterLink to={`/product/${product.id}`}>{product.title}</RouterLink>
          </Heading>
          <Text noOfLines={[1, 3]}>
            {product.description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="center">
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' onClick={() => addToCart(product)}>
            Añadir al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Product