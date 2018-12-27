import React from 'react';
import PropTypes from 'prop-types';
import { mdiMenu } from '@mdi/js';
import Drawer, { DrawerHeader } from '@material/react-drawer';
import NavBar from './NavBar';
import Icon from '../Icon';

class MobileNav extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
  };

  state = { open: false };
  menu = React.createRef();

  focusMenu = () => {
    this.menu.current.focus();
  };

  onDrawerOpen = () => {
    this.setState({ open: true });
  };

  onDrawerClose = () => {
    this.setState(
      () => ({ open: false }),
      () => {
        this.focusMenu();
      }
    );
  };

  render() {
    const { categories } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
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
            ref={this.menu}
            onClick={this.onDrawerOpen}
            className="nav-menu mdr-icon-btn flex-row"
          >
            <Icon path={mdiMenu} />
            <span className="nav-menu-text">Nos categories</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileNav;
