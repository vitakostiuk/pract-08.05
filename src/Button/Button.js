import React from "react";
import PropTypes from "prop-types";

export const Button = ({ onToggle, isShown }) => (
  <button onClick={onToggle}>{isShown ? "Hide" : "Show movies"}</button>
);

Button.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};
