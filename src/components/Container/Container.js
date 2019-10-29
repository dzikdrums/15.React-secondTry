import React from 'react';
import styles from './Container.scss';

const Container = ({ children }) => (
  <div className={styles.component}>{children}</div>
);

export default Container;
