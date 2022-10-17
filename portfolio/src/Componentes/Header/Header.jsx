import styles from './Header.module.css';
import Container from '../../Container/Container';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <div className={styles.header}>
        <h1>Jenny</h1>
        <ul className={styles.list}>
          <li>
            <a href="#">Experiência</a>
          </li>
          <li>
            <a href="#">Formação</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Home;
