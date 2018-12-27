import React from 'react';
import TopBar from './TopBar';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    const {
      state: { categories, ...rest },
      setSearch,
      setLocation,
    } = this.props;

    return (
      <div className="head">
        <header>
          <TopBar
            appState={rest}
            setSearch={setSearch}
            setLocation={setLocation}
          />
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
