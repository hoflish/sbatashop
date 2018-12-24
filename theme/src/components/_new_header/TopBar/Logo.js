import React from 'react';
import { string } from 'prop-types';
// TODO: IMPORTANT: asset for test purpose only
const testLogo =
  'https://trellis.co/wp-content/uploads/2015/09/hidden_meanings_facts_within_famous_logos_cover_image.jpg';

// TODO: use svg or text for logo rendering
const Logo = props => {
  const { logo, alt, title } = props;
  return (
    <a href="/" title={title || ''} className="tb-logo">
      <img src={logo || testLogo} alt={alt || ''} />
    </a>
  );
};

Logo.propTypes = {
  logo: string,
  alt: string,
  title: string,
};

export default Logo;
