import Header from '../../Componentes/Header/Header';
import Container from '../../Container/Container';
import Jenny from '../../icones/imgs/Pic.jpg';
import dec from '../../icones/imgs/dec.svg';
import sep from '../../icones/imgs/separador.svg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className={styles.intro}>
          <div className={styles.losango}>
            <img className={styles.foto} src={Jenny} alt="Foto perfil" />
          </div>
          <div className={styles.text}>
            <img className={styles.dec} src={dec} alt="" />
            <h1>
              Designer Gráfico <br /> & UX/UI Designer
            </h1>
            <h2>Localizada em São Paulo 🏢</h2>
            <div className={styles.ferramentas}>
              <img src={sep} alt="" />
              <p>Pacote adobe</p>
              <img src={sep} alt="" />
              <p>Figma</p>
              <img src={sep} alt="" />
              <p>Pacote Office</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
