import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "../css/navbar.css";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div style={{ margin: "2rem" }}>
        <h1 style={{ fontSize: "3rem" }}>Oops...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
