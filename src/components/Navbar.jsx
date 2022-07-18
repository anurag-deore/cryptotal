import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={icon} alt="logo" className='logo' />
        {/* <Avatar src={icon} size="large" /> */}
        {/* <Typography.Title level={2} className="logo">
          <Link to="/">CrypTotal</Link>
        </Typography.Title> */}
      </div>
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>

      {activeMenu && (
        <Menu theme="dark" defaultSelectedKeys={['/']}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="/exchanges" icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="/news" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar