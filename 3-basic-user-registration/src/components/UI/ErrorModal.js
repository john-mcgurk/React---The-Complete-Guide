import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  return (
    <>
      <div className={styles.backdrop} onClick={props.hideMethod}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.text}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.hideMethod}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
