import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className={'ui menu'}>
      <Link to={'/'} className={'item'}>
        Home
      </Link>
      <div className={'right menu'}>
        <Link to={'/'} className={'item'}>
          All streams
        </Link>
        <GoogleAuth className={'item'}/>
      </div>
    </div>
  )
};

export default Header;
