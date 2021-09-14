import { Text } from '@chakra-ui/react';
import { Popconfirm, Table } from 'antd';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchProductList } from '../../../api';

function Products() {
  const { isLoading, isError, data, error } = useQuery(
    'admin:products',
    fetchProductList
  );

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Action',
        key: 'action',
        render: (record, text) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                alert('silindi');
              }}
              onCancel={() => console.log('iptal edildi')}
              okText="Yes"
              cancelText="Cancel"
              placement="left"
            >
              <a href="/#" style={{ marginLeft: 10 }}>
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <div>
      <Text fontSize="2xl" p="5">
        Products
      </Text>

      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </div>
  );
}

export default Products;
