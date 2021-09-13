import {
  Alert,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';
import { useBasket } from '../../contexts/BasketContext';

function Basket() {
  const [address, setAddress] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const { items, removeFromBasket, emptyBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    await postOrder(input);

    emptyBasket();
    onClose();
  };

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
                <Link to={`/product/${item._id}`}>
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
          <Box mt="10">
            <Text fontSize="22">Total: {total} TL</Text>
          </Box>
          <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>
            Order
          </Button>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
}

export default Basket;
