import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {list.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
