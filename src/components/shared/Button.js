import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
