import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import './MenuContent.css';

class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <Menu isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
          <a id="home" className="menu-item item-color" href="/">
            Home
          </a>
          <a id="about" className="menu-item item-color" href="/about">
            About
          </a>
          <a id="contact" className="menu-item item-color" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small item-color" href="">
            Settings
          </a>
        </Menu>
      </div>
    );
  }
}

export default AppMenu;
