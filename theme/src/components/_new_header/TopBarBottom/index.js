import React from 'react';
import PropTypes from 'prop-types';
import { mdiMenu } from '@mdi/js';
import Drawer, { DrawerHeader } from '@material/react-drawer';
import NavBar from './NavBar';
import Icon from '../../Icon';

class TopBarBottom extends React.Component {
  state = { open: false };
  topBarBottomMenu = React.createRef();

  focusTopBarBottomMenu = () => {
    this.topBarBottomMenu.current.focus();
  };

  onDrawerOpen = () => {
    this.setState({ open: true });
  };

  onDrawerClose = () => {
    this.setState(
      () => ({ open: false }),
      () => {
        this.focusTopBarBottomMenu();
      }
    );
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
                  <span>App Logo</span>
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
            <div className="flex-row flex-sb">
              <button
                ref={this.topBarBottomMenu}
                onClick={this.onDrawerOpen}
                className="nav-menu mdr-icon-btn flex-row"
              >
                <Icon path={mdiMenu} />
                <span className="nav-menu-text">Nos categories</span>
              </button>
            </div>
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
