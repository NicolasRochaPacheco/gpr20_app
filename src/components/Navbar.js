import "./Navbar.css"
import "../index.css"
import { React , useState } from 'react';
import Button from "./misc/Button";
import { Link } from 'react-router-dom';
import InputField from "./misc/InputField";

function Navbar(props) {

  const [ menuClick, setMenuClick ] = useState(false);
  const [ connectionClick, setConnectionClick ] = useState(false);

  // Handles when the connection icon is clicked
  const connectionClickUpdate = () => {
    if (menuClick === true) {
      setConnectionClick(false);
    } else {
      setConnectionClick(!connectionClick);
    }
  };

  // Handles when the menu icon is clicked
  const handleMenu = () => {
    if ( connectionClick === true ) {
      setMenuClick(false);
    } else {
      setMenuClick(!menuClick);
    }
  }

  // Resets navigation panel
  const resetNavigation = () => {
    setMenuClick(false);
  }

  return (
    <nav className={ (menuClick || connectionClick) ? "glass-component navbar active" : "glass-component navbar" }>

      {/* Mobile connection panel icon */}
      <i className={!connectionClick ? "mobile-icon fas fa-network-wired" : "mobile-icon fas fa-times" } onClick={connectionClickUpdate} />
      
      {/* LOGO: Sends user to main screen */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          GPR-20
        </Link>
      </div>

      {/* Menu panel icon */}
      <i className={!menuClick ? "mobile-icon fas fa-bars" : "mobile-icon fas fa-times"} onClick={handleMenu} />

      {/* CONNECTION PANEL: Allows connection to ROS websocket */}
      <div className={!connectionClick ? "navbar-connection" : "glass-component navbar-connection active"} >
        <ul className="navbar-connection-list">
          <li className="navbar-connection-list-item">
            <InputField 
              label="IP: "
              onChange={props.ipChange}
              disabled={props.rosConnected}
              divClass="navbar-connection-input"
              labelClass="navbar-connection-input-label"
              inputClass="navbar-connection-input-field"
            />
          </li>
          <li className="navbar-connection-list-item">
            <InputField 
              disabled={props.rosConnected}
              label="PORT: "
              onChange={props.portChange}
              divClass="navbar-connection-input"
              labelClass="navbar-connection-input-label"
              inputClass="navbar-connection-input-field port"
            />
          </li>
          <li className="navbar-connection-list-item">
            <Button
              disabled={props.rosConnected}
              label="CONNECT"
              onClick={props.handleConnection}
              btnClass="navbar-connection-input-button"
            />
          </li>
          <li className="navbar-connection-list-item">
            <Button
              disabled={!props.rosConnected}
              label="DISCONNECT"
              btnClass="navbar-connection-input-button"
              onClick={props.handleDisconnection}
            />
          </li>
        </ul>
      </div>

      {/* NAVIGATION PANEL: Sends user to different screens */}
      <div className={!menuClick ? "navbar-navigation" : "glass-component navbar-navigation active"}>
        <div className="navbar-navigation-list">
          <div className="navbar-navigation-list-item">
            <Link to="/" className="navbar-link" onClick={resetNavigation}>
              HOME
            </Link>
          </div>
          <div className="navbar-navigation-list-item">
            <Link to="/survey" className="navbar-link" onClick={resetNavigation}>
              SURVEY
            </Link>
          </div>
          <div className="navbar-navigation-list-item">
            <Link to="/data" className="navbar-link" onClick={resetNavigation}>
              DATA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
