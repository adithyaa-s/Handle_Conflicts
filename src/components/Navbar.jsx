import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MyApp</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
        <li>Conflicts</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: '#fff',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Navbar;
