import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox";

export default function Marketplace({ checkboxData }) {
  function handleToggle(category) {}

  return (
    <div>
      {checkboxData &&
        checkboxData.map((checkbox, id) => {
          <Checkbox
            checboxValue={checkbox.name}
            key={id}
            handleToggle={handleToggle}
          />;
        })}
    </div>
  );
}
