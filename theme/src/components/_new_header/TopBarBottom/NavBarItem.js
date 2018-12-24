import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

export default class NavBarItem extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.object,
    isMobile: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
  };

  state = {
    isActive: false,
  };

  onMouseEnterHandler = () => {
    const { isMobile, level } = this.props;
    if (!isMobile && level === 1) {
      this.setState({
        isActive: true,
      });
    }
  };

  onMouseLeaveHandler = () => {
    const { isMobile, level } = this.props;
    if (!isMobile && level === 1) {
      this.setState({
        isActive: false,
      });
    }
  };

  toggleNavItem = () =>
    this.setState({
      isActive: !this.state.isActive,
    });

  render() {
    const { categories, category, level, isMobile } = this.props;
    const { isActive } = this.state;
    const items = categories
      .filter(item => item.parent_id === category.id)
      .map((subcategory, index) => (
        <NavBarItem
          key={index}
          category={subcategory}
          categories={categories}
          level={level + 1}
          isMobile={isMobile}
        />
      ));
    const hasItems = items.length > 0;
    const classes = classNames({
      'column is-3': level === 2,
      'is-active': isActive,
      'has-items': hasItems,
    });
    return (
      <li
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onMouseUp={this.onMouseLeaveHandler}
        className={classes}
      >
        <div className="cat-parent">
          <NavLink
            activeClassName="is-active"
            className={hasItems ? 'has-items' : ''}
            to={category.path}
          >
            {category.name}
          </NavLink>
          {hasItems &&
            isMobile && (
              <span onClick={this.toggleNavItem} className="mdr-icon-wp">
                <Icon path={mdiChevronRight} size="24px" />
              </span>
            )}
        </div>
        {hasItems && (
          <ul
            className={
              (level === 1 ? 'columns is-gapless is-multiline' : '') +
              ' nav-level-' +
              level
            }
          >
            {items}
          </ul>
        )}
      </li>
    );
  }
}
