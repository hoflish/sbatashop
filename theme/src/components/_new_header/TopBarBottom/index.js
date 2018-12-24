import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import Drawer, { DrawerHeader, DrawerAppContent } from '@material/react-drawer';
import NavBar from './NavBar';

class TopBarBottom extends React.Component {
  state = { open: false };
  topBarBottomMenu = React.createRef();

  focusTopBarBottomMenu = () => {
    this.topBarBottomMenu.current.focus();
  };

  onDrawerClose = () => {
    this.setState({ open: false });
    this.focusTopBarBottomMenu();
  };

  onDrawerOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { categories } = this.props;
    const { open } = this.state;
    return (
      <nav>
        <div className="container">
          {/* categories nav bar (mobile) */}
          <div className="is-hidden-tablet">
            <Drawer modal open={open} onClose={this.onDrawerClose}>
              <DrawerHeader>
                <div className="flex-row flex-sb">
                  <div>
                    <span>App Logo</span>
                  </div>
                  <div className="mdr-icon-wp">
                    <button
                      onClick={this.onDrawerClose}
                      className="mdr-icon-btn"
                    >
                      <Icon path={mdiClose} size="24px" className="mdr-icon" />
                    </button>
                  </div>
                </div>
              </DrawerHeader>
              <div className="mobile-nav">
                <NavBar
                  categories={categories}
                  isMobile={true}
                  location={null /*location*/}
                />
              </div>
            </Drawer>
            <DrawerAppContent className="flex-row flex-sb">
              <button
                ref={this.topBarBottomMenu}
                onClick={this.onDrawerOpen}
                className="mdr-icon-btn nav-menu flex-row"
              >
                <span className="mdr-icon-wp ">
                  <Icon path={mdiMenu} size="24px" className="mdr-icon" />
                </span>
                <span className="nav-menu-text">Nos categories</span>
              </button>
            </DrawerAppContent>
          </div>

          {/* categories nav bar (desktop) */}
          <div className="head-nav is-hidden-mobile">
            <NavBar categories={categories} isMobile={false} location={null} />
          </div>
        </div>
      </nav>
    );
  }
}

TopBarBottom.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default TopBarBottom;
