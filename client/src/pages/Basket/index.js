import { Alert, Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext';

function Basket() {
  const { items, removeFromBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <Box p="10">
      {items.length < 1 && (
        <Alert status="warning"> You have not any items in your basket. </Alert>
      )}

      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item._id} style={{ margin: 20 }}>
                <Link to={`/products/${item._id}`}>
                  {item.title} - {item.price} TL
                  <Image
                    htmlWidth={200}
                    loading="lazy"
                    src={item.photos[0]}
                    alt="basket item"
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}

      <Box mt="10">
        <Text fontSize="22">Total: {total}</Text>
      </Box>
    </Box>
  );
}

export default Basket;
