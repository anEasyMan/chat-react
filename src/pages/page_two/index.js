import React from "react";

const names = ["a", "b", "c"];

const PageTwo = () => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default PageTwo;
