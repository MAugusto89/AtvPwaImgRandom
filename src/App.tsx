import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sua foto</h1>

      <div className={styles.body}>
        <p>Uma foto para você!</p>
        <img src="https://picsum.photos/200/300" alt="Imagem Aleatória" />
      </div>
    </div>
  );
};

export default App;