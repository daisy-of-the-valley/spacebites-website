import { useState } from 'react';
import styles from '../styles/nav.module.css';
import React from 'react';
import logo from '../resources/images/navbarlogo.png';


function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <img src={logo} className={styles.logoImg} alt="Space Bites Logo" />
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='/discover' className={`${styles.
              Link}`}>Discover</a>
            </li>
            <li onClick={removeActive}>
              <a href='/cart' className={`${styles.navLink}`}>Cart</a>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;