import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h2>Bad Url!</h2>
      <Link to="/">Home</Link>
    </>
  );
}

export default ErrorPage;
