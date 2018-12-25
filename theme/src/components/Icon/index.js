import React from 'react';
import PropTypes from 'prop-types';
import { default as MDIcon } from '@mdi/react';

const Icon = props => {
  const {
    path,
    size,
    color,
    className,
    wrapperClassName,
    noWrap,
    ...rest
  } = props;
  const iconClasses = className ? `mdr-icon ${className}` : 'mdr-icon';
  const wrapperClasses = wrapperClassName
    ? `mdr-icon-wp ${wrapperClassName}`
    : 'mdr-icon-wp';

  if (!noWrap) {
    return (
      <span className={wrapperClasses}>
        <MDIcon
          path={path}
          size={size}
          color={color}
          className={iconClasses}
          {...rest}
        />
      </span>
    );
  }
  return (
    <MDIcon
      path={path}
      size={size}
      color={color}
      className={iconClasses}
      {...rest}
    />
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

Icon.defaultProps = {
  size: '24px',
  color: '#a2a8bb',
  className: '',
  wrapperClassName: '',
};

export default Icon;
