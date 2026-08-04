import React from "react";

const Button = ({item}) => {
  return (
    <button class="btn btn--default px-3 py-2 uppercase but">
      <span class="btn__text">{item}</span>
    </button>
  );
};

export default Button;
