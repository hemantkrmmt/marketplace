import React from "react";

export default function Checkbox({ checkboxValue, handleToggle }) {
  return (
    <div onClick={() => handleToggle(checkboxValue)}>
      <iput type="checkbox" />
      <span>{checkboxValue}</span>
    </div>
  );
}
