import React from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <h2>{value}</h2>;
});

export default Child;