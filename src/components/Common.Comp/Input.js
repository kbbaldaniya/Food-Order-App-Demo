import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
