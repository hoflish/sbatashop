import React from 'react';
import {
  mdiMagnify,
  mdiCartOutline,
  mdiArrowLeft,
  mdiAccount,
  mdiPhone,
} from '@mdi/js';
import Icon from '../../Icon';
import Logo from './Logo';
import CartCount from './CartCount';
import SearchBox from './SearchBox';

class TopBar extends React.Component {
  state = {
    isMobileSearch: false,
  };

  onMobileSearch = () => {
    this.setState({ isMobileSearch: true });
  };

  onCloseMobileSearch = () => {
    this.setState({ isMobileSearch: false });
  };

  // REVIEW: ...
  handleSearch = search => {
    const {
      appState: { currentPage },
    } = this.props;
    if (currentPage.path === '/search') {
      this.props.setSearch(search);
    } else {
      if (search && search !== '') {
        this.props.setLocation('/search?search=' + search);
      }
    }
  };

  render() {
    const {
      appState: { settings, cart, productFilter },
    } = this.props;
    const { isMobileSearch } = this.state;

    return (
      <div className="tb-wp" role="banner">
        <div className="tb-inner container">
          {/* TopBar Logo */}
          <div className="tb-logo-wp">
            <Logo src={settings.logo} />
          </div>

          {/* TopBar search */}
          <div
            className={
              isMobileSearch ? 'mb-search-active flex-grow' : 'flex-grow'
            }
          >
            <div className="tb-search flex-row">
              <button
                onClick={this.onCloseMobileSearch}
                className="tb-search-back mdr-icon-btn flex-row"
              >
                <Icon path={mdiArrowLeft} />
              </button>
              <SearchBox
                isMobileSearch={isMobileSearch}
                value={productFilter.search}
                onSearch={this.handleSearch}
              />
            </div>
          </div>

          {/* --- TopBar right end section --- */}
          <div className="tb-end">
            <button
              onClick={this.onMobileSearch}
              className="mb-navbar-search mdr-icon-btn flex-row"
            >
              <Icon path={mdiMagnify} />
            </button>

            <div className="mr-s">
              <a href="/support" className="flex-row">
                <Icon path={mdiPhone} />
                <div className="tb-contact-text  is-hidden-mobile">
                  <span className="tb-contact-label">Appelez nous</span>
                  <span className="tb-contact-sublabel">0620 12 3456</span>
                </div>
              </a>
            </div>

            <div className="flex-row mr-s tb-signin">
              <a href="/signin" className="flex-row">
                <Icon path={mdiAccount} wrapperClassName="is-hidden-tablet" />
                <button className="tb-signin-text tb-signin-btn  is-hidden-mobile">
                  Se connecter
                </button>
              </a>
            </div>

            <div className="tb-sep" />

            {/* Cart */}
            <div className="tb-cart">
              <a href="/cart" className="flex-row">
                <CartCount cart={cart} />
                <Icon path={mdiCartOutline} />
                <span className="tb-cart-text is-hidden-mobile">Panier</span>
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default TopBar;
