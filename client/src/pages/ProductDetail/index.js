import { Box, Button, Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import { useBasket } from '../../contexts/BasketContext';

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();

  const { data, isLoading, isError } = useQuery(['product', product_id], () =>
    fetchProduct(product_id)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const findBasketItem = items.find((item) => item._id === product_id);
  const images = data.photos.map((url) => ({ original: url }));

  return (
    <div>
      <Button
        colorScheme={findBasketItem ? 'pink' : 'green'}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? 'Remove from basket' : 'Add to Basket'}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
