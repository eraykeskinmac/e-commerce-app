import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Profile({ history }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout(() => {
      history.push('/products');
    });
  };

  return (
    <div>
      <Table variant="simple">
        <TableCaption placement="top">Profile Information</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Role</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{user._id}</Td>
            <Td>{user.role}</Td>
            <Td>{user.email}</Td>
          </Tr>
        </Tbody>
      </Table>
      <br />
      <br />
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
