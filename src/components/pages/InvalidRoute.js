import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const InvalidRoute = () => {
  return (
    <Card>
      <h1>Your page requested not found.</h1>
      <p>Please contact evedave@gmail.com for the assistance.</p>
      <br />
      <p>
        <Link to="/">
          <Button type="button" version="primary">
            Back to Home
          </Button>
        </Link>
      </p>
    </Card>
  );
};

export default InvalidRoute;
