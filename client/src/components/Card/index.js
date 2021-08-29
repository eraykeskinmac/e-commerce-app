import { Box, Button, Image } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} alt="product" loading="lazy" />

                <Box p="6">
                    <Box d="plex" alignItems="baseline">
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price}</Box>
                </Box>
            </Link>
            <Button colorScheme="pink">Add to Basket</Button>
        </Box>
    );
}

export default Card;
