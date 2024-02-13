import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Heading from "../../components/Heading/Heading";

const NotFoundPage = () => {
  return (
    <main>
      <Heading>Oooops, page not found...</Heading>
      {/* some code to go back to homepage */}
      <Link to="/">Back to homepage</Link>
    </main>
  );
};

export default NotFoundPage;
