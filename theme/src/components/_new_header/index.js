import React from 'react';
import TopBar from './TopBar';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

/*
  TODO:
  #1. Get header logo from settings (done)
  #2. Add cart count indicator (done)
  #3. Style category NavLink, "is-active" class (done)
  #4. Handle search
*/
class Header extends React.Component {
  render() {
    const {
      state: { categories, settings, cart },
    } = this.props;

    return (
      <div className="head">
        <header>
          <TopBar settings={settings} cart={cart} />
        </header>
        <nav>
          <div className="container">
            <div className="is-hidden-tablet">
              <MobileNav categories={categories} />
            </div>

            <div className="head-nav is-hidden-mobile">
              <NavBar
                categories={categories}
                isMobile={false}
                location={null}
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
