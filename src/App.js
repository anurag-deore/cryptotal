import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/"><HomePage /></Route>
                            <Route exact path="/exchanges"><Exchanges /></Route>
                            <Route exact path="/cryptocurrencies"><Cryptocurrencies /></Route>
                            <Route exact path="/crypto/:coinId"><CryptoDetails /></Route>
                            <Route exact path="/news"><News /></Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                        <Link to="/">
                            CrypTotal Inc.
                        </Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;