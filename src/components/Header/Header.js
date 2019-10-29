import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/Search';

const iconName = settings.icon;

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Search />
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">
              <Icon name={iconName} />
            </Link>
            <nav>
              <NavLink activeClassName="active" exact to="/">
                Home
              </NavLink>
              <NavLink activeClassName="active" exact to="/Faq">
                Faq
              </NavLink>
              <NavLink activeClassName="active" exact to="/Info">
                Info
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
