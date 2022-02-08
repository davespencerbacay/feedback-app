import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const AboutPage = () => {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React App to leave feedback for a product or service.</p>
      <p>
        <b>Version</b>: 1.0.0
      </p>
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

export default AboutPage;
