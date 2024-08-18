import { Link } from "react-router-dom";

// Link --> replacement for generic anchor
// imported through react-dom

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to={"/users"}>Users</Link>
    </>
  );
};

export default HomePage;
