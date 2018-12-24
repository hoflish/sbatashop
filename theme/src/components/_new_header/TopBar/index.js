import React from 'react';
import { Icon } from '@mdi/react';
import {
  mdiMagnify,
  mdiCartOutline,
  mdiArrowLeft,
  mdiAccount,
  mdiPhone,
} from '@mdi/js';
import Logo from './Logo';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileSearch: false,
    };
    this.searchInput = React.createRef();
  }

  onMobileSearch = () => {
    this.setState(
      () => ({ isMobileSearch: true }),
      () => {
        this.searchInput.current.focus();
      }
    );
  };

  onCloseMobileSearch = () => {
    this.setState({ isMobileSearch: false });
  };

  render() {
    const { isMobileSearch } = this.state;
    return (
      <header>
        <div className="tb-wp" role="banner">
          <div className="tb-inner container">
            {/* TopBar Logo */}
            <div className="tb-logo-wp">
              <Logo />
            </div>

            {/* TopBar search */}
            <div
              className={
                isMobileSearch ? 'mb-search-active flex-grow' : 'flex-grow'
              }
            >
              <div className="tb-search flex-row">
                <span className="mdr-icon-wp">
                  <Icon
                    onClick={this.onCloseMobileSearch}
                    path={mdiArrowLeft}
                    size="24px"
                    className="tb-search-back mdr-icon"
                  />
                </span>
                <form>
                  <div className="tb-search-box">
                    <input ref={this.searchInput} className="tb-search-input" />
                  </div>
                  <button className="tb-search-btn">
                    <Icon path={mdiMagnify} size="24px" className="mdr-icon" />
                  </button>
                </form>
              </div>
            </div>

            {/* --- TopBar right end section */}
            <div className="tb-end">
              <span
                onClick={this.onMobileSearch}
                className="mdr-icon-wp mb-navbar-search"
              >
                <Icon path={mdiMagnify} size="24px" className="mdr-icon" />
              </span>

              <div className="mr-s">
                <a href="/support" className="flex-row">
                  <span className="mdr-icon-wp">
                    <Icon path={mdiPhone} size="24px" className="mdr-icon" />
                  </span>
                  <div className="tb-contact-text  is-hidden-mobile">
                    <span className="tb-contact-label">Appelez nous</span>
                    <span className="tb-contact-sublabel">0620 12 3456</span>
                  </div>
                </a>
              </div>

              <div className="flex-row mr-s tb-signin">
                <a href="/signin" className="flex-row">
                  <span className="mdr-icon-wp is-hidden-tablet">
                    <Icon path={mdiAccount} size="24px" className="mdr-icon" />
                  </span>
                  <button className="tb-signin-text tb-signin-btn  is-hidden-mobile">
                    Se connecter
                  </button>
                </a>
              </div>

              <div className="tb-sep" />

              {/* Cart */}
              <div className="tb-cart">
                <a href="/cart" className="flex-row">
                  <span className="mdr-icon-wp ">
                    <Icon
                      path={mdiCartOutline}
                      size="24px"
                      className="mdr-icon"
                    />
                  </span>
                  <span className="tb-cart-text is-hidden-mobile">Panier</span>
                </a>
              </div>
            </div>
            <div />
          </div>
        </div>
      </header>
    );
  }
}

export default TopBar;
