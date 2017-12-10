import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'element-react';

import 'element-theme-default';

import logo from './logo.svg';
import './style.css';

const Header = () => (
	<Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
	  <Link to='/'><Menu.Item index="1"><img src={logo} className="App-logo" alt="logo" /></Menu.Item></Link>
	  <div className="App-right-menu">
	  	<Link to='/about'><Menu.Item index="2">About</Menu.Item></Link>
	  	<Menu.Item index="3"><Button type="primary" size="small">Wow!</Button></ Menu.Item>
	  </div>
	</Menu>
)

export default Header