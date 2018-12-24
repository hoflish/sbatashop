import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

export default class NavBar extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    isMobile: PropTypes.bool.isRequired,
    // TODO: add location prop
  };

  render() {
    const { categories, isMobile } = this.props;
    let addItemsToMenu = [];
    /*if (themeSettings.header_menu && themeSettings.header_menu.length > 0) {
      addItemsToMenu = themeSettings.header_menu.map(item => ({
        name: item.text,
        path: item.url,
        id: item.id || '',
        parent_id: item.parent_id || null
      }));
    }*/
    const menuItems = [...categories, ...addItemsToMenu];

    const items = menuItems
      .filter(category => category.parent_id === null)
      .map((category, index) => (
        <NavBarItem
          key={index}
          category={category}
          categories={categories}
          level={1}
          isMobile={isMobile}
        />
      ));

    return <ul className="head-nav-items nav-level-0">{items}</ul>;
  }
}
