import React from 'react';

const ApplyButton = ({ applied, ...props }) => {
  const classList = (applied ? "btn btn-success" : "btn btn-dark") + " btn-mdm btn-block";
  const buttonText = (!applied ? 'Apply' : 'Applied');

  return (
    <button {...props} type="button" class={classList}>{buttonText}</button>
  )
}

export default ApplyButton;