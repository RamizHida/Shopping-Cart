import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="shopping-page">Shopping Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
