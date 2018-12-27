import React from 'react';
import { mdiMagnify, mdiClose } from '@mdi/js';
import Icon from '../../Icon';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hasFocus: false,
    };
    this.searchInput = React.createRef();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyPress = event => {
    if (event.keyCode === 13 || event.which === 13) {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    const { onSearch } = this.props;
    const { value } = this.state;
    onSearch(value);
  };

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.handleClear();
    }
  };

  handleClear = () => {
    this.setState({ value: '' });
    // TODO: empty value should return a list of products if any
    // based on what, result is returned ?
    // this.props.onSearch('');
  };

  focusTextInput = () => {
    this.searchInput.current.focus();
  };

  componentDidUpdate(prevProps) {
    const { isMobileSearch } = this.props;
    if (isMobileSearch !== prevProps.isMobileSearch && !!isMobileSearch) {
      this.focusTextInput();
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className="form">
        <div className="tb-search-box">
          <input
            ref={this.searchInput}
            className="tb-search-input"
            type="text"
            placeholder="Rechercher..."
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onKeyDown={this.handleKeyDown}
          />
          {value &&
            value !== '' && (
              <button
                onClick={this.handleClear}
                className="tb-search-clear mdr-icon-btn flex-row"
              >
                <Icon noWrap path={mdiClose} size="20px" />
              </button>
            )}
        </div>
        <button onClick={this.handleSearch} className="tb-search-btn">
          <Icon noWrap path={mdiMagnify} />
        </button>
      </div>
    );
  }
}

export default SearchBox;
