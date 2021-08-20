import { Button } from '@chakra-ui/react';
import { React } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">eCommerce</Link>
        </div>

            <ul className={styles.menu}>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/sigin">
          <Button colorScheme="pink">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="pink">Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
