import React from 'react';
import TopBar from './TopBar';
import TopBarBottom from './TopBarBottom';
/*
  TODO:
  #1. Get header logo from settings (done)
  #2. Add cart count indicator (done)
  #3. Style category NavLink, "is-active" class (done)
  #4. Handle search
*/
class Header extends React.Component {
  render() {
    const { categories, settings, cart } = this.props.state;

    return (
      <div className="head">
        <TopBar settings={settings} cart={cart} />
        <TopBarBottom categories={categories} />
      </div>
    );
  }
}

export default Header;
