import React from 'react';

const ApplyButton = ({ applied, ...props }) => {
  const classList = (applied ? "btn btn-success" : "btn btn-dark") + " btn-mdm";
  const buttonText = (!applied ? 'Apply' : 'Applied');

  return (
    <button {...props} type="button" className={classList + " mt-auto ml-auto"}>{buttonText}</button>
  )
}

export default ApplyButton;