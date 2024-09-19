import { Link } from 'react-router-dom';
import './HomePage.styles.css';

function App() {
  return (
    <>
      <div className="main">
        <nav>
          <li>
            <Link to="shopping-page" className="link">
              Go Shopping
            </Link>
          </li>
        </nav>
      </div>
      <div>
        <p className="pitch">Where Shopping Is Joy</p>
      </div>
    </>
  );
}

export default App;
