import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import error from '../../assests/error.png';

function ErrorPage() {
  return (
    <>
      <div className={styles.error}>
        <h2>Sorry, the following url is invalid.</h2>

        <button className={styles.back__button}>
          <Link to="/">Go to Home Page</Link>
        </button>
        <img src={error} className={styles.error__image} />
      </div>
    </>
  );
}

export default ErrorPage;
