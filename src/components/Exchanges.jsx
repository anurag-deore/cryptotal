import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Typography } from 'antd';
import React, { useRef, useState } from 'react'
// i mport { useGetCryptoExchangesQuery } from '../services/cryptoExchangeApi';
import jsonData from '../services/response.json';

const { Title: AntTitle } = Typography;

const Exchanges = () => {
  // const { data: cryptosList, isFetching } = useGetCryptoExchangesQuery(100);
  // const { data: cryptosList, isFetching } = useGetCryptoExchangesQuery(100);
  const cryptosList = jsonData;
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, dataIndex) => {
    clearFilters();
    setSearchText('');
    setSearchedColumn(dataIndex);

  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            // onClick={(dataIndex) => clearFilters && handleReset(clearFilters,dataIndex)}
            onClick={() => clearFilters && handleReset(clearFilters, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : "#1e1e1e",
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (text) : (text),
  });


  const columns = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
      width: '15%',
      render: (item, record, index) => (<>{index + 1}</>)
    },
    {
      title: 'Market',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      },
      sortDirections: ['ascend', 'descend'],
      ...getColumnSearchProps('name'),
    },
  ];

  // if (isFetching) return <Loader />;

  return (
    <>
      <AntTitle level={3}>Market Exchanges</AntTitle>
      <Table style={{ "borderRadius": "20px" }} rowKey='id' columns={columns} dataSource={cryptosList["data"]} />
    </>
  )
}

export default Exchanges