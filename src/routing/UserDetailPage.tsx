import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // Below: a tour through state hooks associated with react router.

  // Hook for extracting parameters from the url.
  const params = useParams();
  // To access and update the query string parameters.
  // Deconstructor: a list of string parameters, the function for updating them
  const [searchParams, setSearchParameters] = useSearchParams();

  // useLocation retrieves the current location in our tree of endpoints
  const location = useLocation();
  console.log(searchParams.get("this"));
  console.log(location.pathname);
  return <p>User</p>;
};

export default UserDetailPage;
