import React from "react";

function TextField({ label, value, name, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        autoComplete="off"
        className="textfield__input bg-red-50"
        type="text"
      />
    </div>
  );
}

export default TextField;
