import * as React from 'react';
import logo from './../Assets/images/header/logo.png';
import bell from './../Assets/images/header/bell.svg';
import setting from './../Assets/images/header/cog.svg';
import question from './../Assets/images/header/question-circle.svg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const SiteHeader = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [menuToggle, setMenuToggle] = React.useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  return (
    <header className={menuToggle ? `header menu-open` : `header`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header-logo d-flex align-items-flex-end">
            <img src={logo} alt="Video Streaming Management" />
            <span>Video Streaming Management</span>
          </div>
          <div className="user-nav">
            <ul className="d-flex ">
              <li className="notification">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>
                    <img src={bell} alt="bell" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Notification 1 Action</DropdownItem>
                    <DropdownItem>Notification 2 Action</DropdownItem>
                    <DropdownItem>Notification 3 Action</DropdownItem>
                    <DropdownItem>Notification 4 Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <span>14</span>
              </li>
              <li>
                <img src={setting} alt="setting" />
              </li>
              <li>
                <img src={question} alt="question" />
              </li>
              <li className="toggle-icon show-mobile header-show menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="theme-menus d-flex align-items-center">
          <ul>
            <li><a href="/"  onClick={toggleMenu}>Home </a></li>
            <li><a href="/" onClick={toggleMenu}>Usage </a></li>
            <li><a href="/" onClick={toggleMenu}>Service </a></li>
            <li><a href="/" onClick={toggleMenu}>Management </a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default SiteHeader