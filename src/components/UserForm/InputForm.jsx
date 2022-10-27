import React from "react";

export const InputForm = (props) => {
  return (
    <div className="" ass="form-group">
      <label>{props.title}</label>
      <input
        className="form-control"
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
};
