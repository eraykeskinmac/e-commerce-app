import {
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext';

function Basket() {
  const { items, removeFromBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  console.log(items);
  return (
    <Box p="10">
      {items.length < 1 && (
        <Alert status="warning"> You have not any items in your basket. </Alert>
      )}

      {items.length > 0 && (
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {items.map((item) => (
              <Box
                key={item._id}
                w="400px"
                overflow="hidden"
                boxShadow="sm"
                bg="gray.200"
              >
                <Link to={`/products/${item._id}`}>
                  <Image
                    loading="lazy"
                    src={item.photos[0]}
                    alt="basket item"
                  />
                </Link>
                <Stack p={2} isInline align="center" justify="space-between">
                  <Text fontSize="1.5rem" fontWeight={400}>
                    {item.title}
                  </Text>
                  <Text fontSize="1rem">{item.price} TL</Text>
                </Stack>
                <Flex justifyContent="end" p="2">
                  <Button
                    size="sm"
                    colorScheme="pink"
                    onClick={() => removeFromBasket(item._id)}
                  >
                    Remove
                  </Button>
                </Flex>
              </Box>
            ))}
          </Grid>
        </>
      )}

      <Box mt="10">
        <Text fontSize="22">Total: {total} TL</Text>
      </Box>
    </Box>
  );
}

export default Basket;
