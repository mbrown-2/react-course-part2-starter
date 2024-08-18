import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  // enabling navigation between pages.
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
        navigate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
