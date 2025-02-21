import  React from 'react'
import PropTypes from 'prop-types';
const Button = ({onClick, children, className}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button

