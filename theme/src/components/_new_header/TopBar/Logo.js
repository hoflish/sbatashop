import React from 'react';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const Logo = props => {
  const { src, alt, title } = props;
  return (
    <NavLink to="/" title={title || ''} className="tb-logo">
      <img src={src || ''} alt={alt || 'App Logo'} />
    </NavLink>
  );
};

Logo.propTypes = {
  src: string,
  alt: string,
  title: string,
};

export default Logo;
